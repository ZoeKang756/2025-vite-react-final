import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
const { VITE_API_PATH, VITE_BASE_URL } = import.meta.env;

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({});
  const page = searchParams.get("page") ? searchParams.get("page") : 1;

  const [collapseShow, setCollapseShow] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/orders`,
        { params: searchParams },
      );

      setOrders(response.data.orders);
      setPagination(response.data.pagination);
    } catch {
       // error
    } finally {
      setIsShowLoading(false);
    }
  };

  const onChangePage = (page = 1) => {
    setSearchParams(() => {
      let param = {};
      if (page) param.page = page;
      return param;
    });
  };

  const toggleCollapse = (id, section) => {
    const updatedCollapses = [...collapseShow];
    const index = updatedCollapses.indexOf(`${id}-${section}`);

    if (index < 0) {
      updatedCollapses.push(`${id}-${section}`);
    } else {
      updatedCollapses.splice(index, 1);
    }
    setCollapseShow(updatedCollapses);
  };

  useEffect(() => {
    setSearchParams(() => {
      let param = {};
      if (page) param.page = page;
      return param;
    });

    getOrders();
  }, [searchParams]);

  return (
    <>
      <div className="py-4">
        <div
          className="d-flex justify-content-between py-2"
          style={{ color: "#785571" }}
        >
          <h1 className="fs-4">
            <i className="bi bi-bluesky me-2">我的訂單</i>
          </h1>
        </div>

        {!isShowLoading && (
          <>
            {!orders.length ? (
              <div
                className="fs-3"
                style={{
                  paddingTop: "200px",
                  paddingBottom: "200px",
                  border: "1px solid #e2cee2",
                  color: "#e2cee2",
                }}
              >
                趕快去看看喜歡的商品，把它們帶回家吧!
              </div>
            ) : (
              <div>
                {orders.map((order) => (
                  <div key={`table-${order.id}`}>
                    <table
                      className="table rounded"
                      style={{ border: "1px solid #bfb3c2" }}
                    >
                      <tbody>
                        <tr style={{ borderColor: "#bfb3c2" }}>
                          <th
                            scope="col"
                            style={{
                              color: "#582a4e",
                              backgroundColor: "#f3f1f3",
                              width: "180px",
                            }}
                          >
                            訂單編號
                          </th>
                          <td className="text-start">
                            <div className="d-flex flex-wrap justify-content-between">
                              <div>
                                {order.is_paid ? (
                                  <span className="badge bg-success">
                                    已付款
                                  </span>
                                ) : (
                                  <span className="badge bg-danger">
                                    未付款
                                  </span>
                                )}
                                <span className="text-nowrap">{order.id}</span>
                              </div>
                              <div
                                className="text-secondary"
                                style={{ fontSize: "14px" }}
                              >
                                《購買日期》
                                {new Date(order.create_at).toLocaleString(
                                  "zh-TW",
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr style={{ borderColor: "#bfb3c2" }}>
                          <th
                            scope="col"
                            style={{
                              color: "#582a4e",
                              backgroundColor: "#f3f1f3",
                            }}
                          >
                            訂購明細
                          </th>
                          <td className="text-start">
                            <div
                              className="d-flex flex-wrap justify-content-between"
                              style={{ backgroundColor: "#eadceb" }}
                            >
                              <div className="py-1 px-2 fw-bold fst-italic">
                                結帳金額：${order.total.toLocaleString("en-US")}
                              </div>
                              <div>
                                <button
                                  className="collapse-button btn mybtn"
                                  type="button"
                                  onClick={() => toggleCollapse(order.id, "A")}
                                >
                                  共{Object.entries(order.products).length}{" "}
                                  項商品
                                  {collapseShow.indexOf(`${order.id}-A`) < 0 ? (
                                    <i className="bi bi-chevron-double-down ms-1"></i>
                                  ) : (
                                    <i className="bi bi-chevron-double-up ms-1"></i>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div
                              className={`${collapseShow.indexOf(`${order.id}-A`) < 0 ? "collapse" : "show"}`}
                              id={`collapse-A-${order.id}`}
                            >
                              <div>
                                {Object.entries(order.products).map(
                                  ([pid, item], i) => (
                                    <div
                                      key={`item ${pid}`}
                                      className="row border-bottom py-1"
                                    >
                                      <div className="col-md-4">
                                        <div className="fw-bold">
                                          {i + 1}. {item.product.title}
                                        </div>
                                        <img
                                          src={item.product.imageUrl}
                                          alt={item.product.title}
                                          className="object-fit-cover rounded ms-3"
                                          style={{
                                            height: "4rem",
                                            width: "7rem",
                                          }}
                                        />
                                      </div>
                                      <div className="col-md-4 text-decoration-line-through text-secondary">
                                        原價：$
                                        {item.product.origin_price}
                                      </div>

                                      <div className="col-md-4">
                                        $
                                        {item.product.price.toLocaleString(
                                          "en-US",
                                        )}
                                        /{item.product.unit}
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>

                        {order.message && (
                          <tr style={{ borderColor: "#bfb3c2" }}>
                            <th
                              scope="col"
                              style={{
                                color: "#582a4e",
                                backgroundColor: "#f3f1f3",
                              }}
                            >
                              訂單留言
                            </th>
                            <td className="text-start">{order.message}</td>
                          </tr>
                        )}

                        <tr style={{ borderColor: "#bfb3c2" }}>
                          <th
                            scope="col"
                            style={{
                              color: "#582a4e",
                              backgroundColor: "#f3f1f3",
                            }}
                          >
                            收件資料
                          </th>
                          <td className="text-start">
                            <div className="text-secondary">
                              <div className="d-flex flex-wrap justify-content-start">
                                <div className="p-1">
                                  <span className="badge bg-light text-dark fs-6">
                                    姓名
                                  </span>
                                  {order.user.name}
                                </div>
                                <div className="p-1">
                                  <span className="badge bg-light text-dark fs-6">
                                    電話
                                  </span>
                                  {order.user.tel}
                                </div>
                                <div className="p-1">
                                  <span className="badge bg-light text-dark fs-6">
                                    信箱
                                  </span>
                                  {order.user.email}
                                </div>
                                <div className="p-1">
                                  <span className="badge bg-light text-dark fs-6">
                                    地址
                                  </span>
                                  {order.user.address}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}

                <div id="frontend" className="my-5">
                  <Pagination
                    pagination={pagination}
                    onChangePage={onChangePage}
                  ></Pagination>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Loading isShow={isShowLoading}></Loading>
    </>
  );
}
export default Orders;
