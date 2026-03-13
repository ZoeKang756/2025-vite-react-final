import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";

const { VITE_API_PATH, VITE_BASE_URL } = import.meta.env;

function SingleOrder() {
  const [orderData, setOrderData] = useState({
    carts: [],
    total: 0,
    final_total: 0,
  });
  const [isShowLoading, setIsShowLoading] = useState(true);
  const { id } = useParams();

  const getSingleOrder = async () => {
    try {
      const response = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/order/${id}`,
      );
      setOrderData(response.data.order);
    } catch (error) {
      console.error(error.response?.data);
    } finally {
      setIsShowLoading(false);
    }
  };

  useEffect(() => {
    getSingleOrder();
  }, [id]);

  return (
    <>
      <div className="container p-4">
        <div
          className="d-flex justify-content-between py-2"
          style={{ color: "#785571" }}
        >
          <h1 className="fs-4 fw-bold">
            <i className="bi bi-bluesky me-2"></i>訂單明細
          </h1>
        </div>
        {!isShowLoading && (
          <div>
            {Object.keys(orderData.products).length ? (
              <div className="container mt-2">
                <div className="text-end">
                  <span className="d-flex justify-content-between"></span>
                </div>
                <div
                  className="container"
                  style={{ border: "1px solid #e2cee2" }}
                >
                  <div className="row py-1" style={{ color: "#b99cba" }}>
                    <div className="col-md-6">品項</div>
                    <div className="col-md-2 text-end">單價</div>
                    <div className="col-md-2 text-start">數量</div>
                    <div className="col-md-1 text-end">小計</div>
                  </div>
                  {Object.entries(orderData.products).map(([item]) => (
                    <div key={item.id}>
                      <div
                        className="row py-2"
                        style={{ borderTop: "1px solid #e2cee2" }}
                      >
                        <div className="col-md-6">
                          <div className="d-flex justify-content-start">
                            <div className="mx-1">
                              <img
                                src={item.product.imageUrl}
                                alt={item.product.title}
                                className="object-fit-cover rounded mx-1"
                                style={{ height: "5rem", width: "8rem" }}
                              />
                            </div>
                            <div>
                              <div className="text-start fw-bold">
                                {item.product.title}
                              </div>
                              <div className="text-decoration-line-through text-secondary my-1">
                                原價：${item.product.origin_price}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2 py-1">
                          <div
                            className="mx-1 fw-bold text-end"
                            style={{ color: "#785571" }}
                          >
                            ${item.product.price.toLocaleString("en-US")} /
                            {item.product.unit}
                          </div>
                        </div>
                        <div className="col-md-3 mb-1">
                          <div className="d-flex flex-nowrap justify-content-between">
                            <div>
                              {item.qty} {item.product.unit}
                            </div>
                            <div className="flex-grow-1 text-end  px-1">
                              ${item.final_total.toLocaleString("en-US")}
                            </div>
                          </div>
                        </div>
                      </div>
                      {item.coupon && (
                        <div className="row" style={{ fontSize: "11pt" }}>
                          <div className="col-md-1"></div>
                          <div className="col-md-8 text-start text-secondary">
                            <i className="bi bi-gift"></i> 使用優惠券:〔
                            {item.coupon.code}〕–超級特惠價格
                            {100 - item.coupon.percent}% OFF
                          </div>
                          <div className="col-md-1 text-end text-secondary">
                            省下$
                            {(item.total - item.final_total).toLocaleString(
                              "en-US",
                            )}
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="row py-1">
                    <div
                      className="col-md-10 text-end"
                      style={{ color: "#785571" }}
                    >
                      結帳金額
                    </div>
                    <div className="col-md-1 text-end">
                      ${orderData.total.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <div style={{ border: "1px solid #e2cee2" }}>
                  <div className="p-3 text-start">
                    <div className="my-5 row justify-content-center">
                      <div className="col-6">
                        <h1
                          className="fs-4 fw-bold py-1"
                          style={{ color: "#785571" }}
                        >
                          收件人資料
                        </h1>
                        <hr />
                        <div className="row">
                          <div className="col-4">信箱</div>
                          <div className="col-8">{orderData.user.email}</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-4">收件人姓名</div>
                          <div className="col-8">{orderData.user.name}</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-4">收件人電話</div>
                          <div className="col-8">{orderData.user.tel}</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-4">收件人地址</div>
                          <div className="col-8">{orderData.user.address}</div>
                        </div>
                        <hr />
                        {orderData.message && (
                          <div className="row">
                            <div className="col-4">留言</div>
                            <div className="col-8">{orderData.message}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fs-3"
                style={{
                  padding: "200px",
                  border: "1px solid #e2cee2",
                  color: "#e2cee2",
                }}
              >
                購物車裡空空的，趕快去買點東西吧~
              </div>
            )}
          </div>
        )}
      </div>
      <Loading isShow={isShowLoading}></Loading>
    </>
  );
}
export default SingleOrder;
