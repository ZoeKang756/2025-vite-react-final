import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";
import { useForm } from "react-hook-form";
import useMessage from "../../hooks/useMessages";

const { VITE_API_PATH, VITE_BASE_URL } = import.meta.env;

function Cart() {
  const [cartData, setCartData] = useState({
    carts: [],
    total: 0,
    final_total: 0,
  });

  const [isShowLoading, setIsShowLoading] = useState(true);
  const [btnLoadingId, setBtnLoadingId] = useState(null);
  const { handleCartChange } = useOutletContext();

  const navigate = useNavigate();
  const { showSuccessMsg, showErrorMsg } = useMessage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const getCarts = async () => {
    try {
      const response = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart`,
      );
      setCartData(response.data.data);
      handleCartChange(response.data.data.carts.length);
    } catch {
      // error
    } finally {
      setIsShowLoading(false);
    }
  };

  const removeFromCarts = async (e, id) => {
    setBtnLoadingId(e.target.id);
    e.preventDefault();
    try {
      await axios.delete(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart/${id}`,
      );
      showSuccessMsg("購物車更新成功");
      getCarts();
    } catch {
      showErrorMsg("購物車更新失敗");
    } finally {
      setBtnLoadingId(null);
    }
  };

  const clearCarts = async (e) => {
    setBtnLoadingId(e.target.id);
    e.preventDefault();

    try {
      await axios.delete(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/carts`,
      );
      showSuccessMsg("購物車清空成功");
      getCarts();
    } catch  {
      showErrorMsg("購物車清空失敗");
    } finally {
      setBtnLoadingId(null);
    }
  };

  const onFormSubmit = async (formData) => {
    const data = {
      user: {
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
        address: formData.address,
      },
      message: formData.message,
    };

    try {
      const response = await axios.post(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/order`,
        { data: data },
      );
      reset();
      handleCartChange(0);
      navigate(`/order/${response.data.orderId}`);
    } catch {
      showErrorMsg("購物車訂單成立失敗!");
    } finally {
      setBtnLoadingId(null);
    }
  };

  const handleSelectChange = async (e, id) => {
    e.preventDefault();

    const data = {
      product_id: e.target.attributes.data_product_id.nodeValue,
      qty: parseInt(e.target.value),
    };

    try {
      await axios.put(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart/${id}`,
        { data: data },
      );
      getCarts();
      showSuccessMsg("購物車更新成功");
    } catch {
      showErrorMsg("購物車更新失敗!");
    }
  };

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <>
      <div className="container py-4">
        <div
          className="d-flex justify-content-between py-2"
          style={{ color: "#785571" }}
        >
          <h1 className="fs-4 fw-bold">
            <i className="bi bi-bluesky me-2"></i>購物車
          </h1>
        </div>
        {!isShowLoading && (
          <div>
            {cartData.carts.length ? (
              <div className="container mt-2">
                <div className="text-end">
                  <span className="d-flex justify-content-between">
                    <button
                      id="clearCartBtn"
                      disabled={btnLoadingId && true}
                      onClick={(e) => clearCarts(e)}
                      type="button"
                      className="btn mybtn my-2"
                      style={{ borderRadius: "0px" }}
                    >
                      {btnLoadingId && btnLoadingId === "clearCartBtn" ? (
                        <Loading isShow={btnLoadingId} size={"20"}></Loading>
                      ) : (
                        <i className="bi bi-trash"></i>
                      )}
                      清空購物車
                    </button>
                  </span>
                </div>
                <div
                  className="container"
                  style={{ border: "1px solid #e2cee2" }}
                >
                  <div className="row py-1" style={{ color: "#b99cba" }}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">品項</div>
                    <div className="col-md-3 text-end">單價</div>
                    <div className="col-md-2 text-start">數量</div>
                    <div className="col-md-1 text-end">小計</div>
                  </div>
                  {cartData.carts.map((cart) => (
                    <div key={cart.product_id}>
                      <div
                        className="row py-2"
                        style={{ borderTop: "1px solid #e2cee2" }}
                      >
                        <div className="col-md-1 pb-2 text-end">
                          <button
                            type="button"
                            disabled={btnLoadingId && true}
                            id={`removeBtn${cart.product_id}`}
                            onClick={(e) => removeFromCarts(e, cart.id)}
                            className="btn mybtn btn-sm nobg"
                            style={{ borderRadius: "0px", padding: "3px" }}
                          >
                            {btnLoadingId &&
                            btnLoadingId === `removeBtn${cart.product_id}` ? (
                              <Loading
                                isShow={btnLoadingId}
                                size={"18"}
                              ></Loading>
                            ) : (
                              <i className="bi bi-x-octagon me-1"></i>
                            )}
                          </button>
                        </div>
                        <div className="col-md-5">
                          <div className="d-flex justify-content-start">
                            <div className="mx-1">
                              <Link to={`/product/${cart.product.id}`} target="_blank">
                              <img
                                src={cart.product.imageUrl}
                                alt={cart.product.title}
                                className="object-fit-cover rounded mx-1"
                                style={{ height: "5rem", width: "8rem" }}
                              /></Link>
                            </div>
                            <div>
                              <div className="text-start fw-bold">
                                <span
                                  className="badge me-1 mb-1"
                                  style={{
                                    backgroundColor: "#785571",
                                    borderRadius: "0px",
                                  }}
                                >
                                  {cart.product.category}
                                </span>
                              </div>
                              <div className="text-start fw-bold">
                                {cart.product.title}
                              </div>

                              <div className="text-decoration-line-through text-secondary my-1">
                                原價：${cart.product.origin_price}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3 py-1">
                          <div
                            className="mx-1 fw-bold text-end"
                            style={{ color: "#785571" }}
                          >
                            ${cart.product.price.toLocaleString("en-US")} /{" "}
                            {cart.product.unit}
                          </div>
                        </div>
                        <div className="col-md-3 mb-1">
                          <div className="d-flex flex-nowrap justify-content-between">
                            <div>
                              <select
                                onChange={(e) => handleSelectChange(e, cart.id)}
                                className="form-select"
                                data_product_id={cart.product_id}
                                defaultValue={cart.qty}
                              >
                                {Array.from(
                                  Array(cart.qty + 10),
                                  (x, index) => (
                                    <option
                                      value={index + 1}
                                      key={`option${index + 1}`}
                                    >
                                      {index + 1}
                                      {cart.product.unit}
                                    </option>
                                  ),
                                )}
                              </select>
                            </div>
                            <div className="flex-grow-1 text-end  px-1">
                              ${cart.final_total.toLocaleString("en-US")}
                            </div>
                          </div>
                        </div>
                      </div>
                      {cart.coupon && (
                        <div className="row" style={{ fontSize: "11pt" }}>
                          <div className="col-md-1"></div>
                          <div className="col-md-8 text-start text-secondary">
                            <i className="bi bi-gift"></i> 使用優惠券:〔
                            {cart.coupon.code}〕–超級特惠價格
                            {100 - cart.coupon.percent}% OFF
                          </div>
                          <div className="col-md-1 text-end text-secondary">
                            省下$
                            {(cart.total - cart.final_total).toLocaleString(
                              "en-US",
                            )}
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div
                    className="row py-1"
                    style={{ borderTop: "1px solid #e2cee2" }}
                  >
                    <div
                      className="col-md-10 text-end"
                      style={{ color: "#785571" }}
                    >
                      總計金額
                    </div>
                    <div className="col-md-1 text-end">
                      ${cartData.total.toLocaleString("en-US")}
                    </div>
                  </div>
                  <div className="row py-1">
                    <div
                      className="col-md-10 text-end"
                      style={{ color: "#785571" }}
                    >
                      結帳金額
                    </div>
                    <div className="col-md-1 text-end">
                      ${cartData.final_total.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <div style={{ border: "1px solid #e2cee2" }}>
                  <div className="d-flex flex-wrap m-3 justify-content-center">
                    <div
                      className="text-start py-2 mx-1 fw-bold"
                      style={{ color: "#785571" }}
                    >
                      我要使用優惠券
                    </div>
                    <div
                      className="input-group mb-3"
                      style={{ width: "400px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="請輸入優惠券"
                      />
                      <button
                        className="btn mybtn"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="bi bi-cursor-fill"></i> 確認送出
                      </button>
                    </div>
                  </div>
                  <div
                    className="p-3 text-start"
                    style={{ borderTop: "1px solid #e2cee2" }}
                  >
                    <div className="my-5 row justify-content-center">
                      <form
                        className="col-md-6"
                        onSubmit={handleSubmit(onFormSubmit)}
                      >
                        <div className="input-group">
                          <span
                            className={`input-group-text ${errors.email && "border-danger"}`}
                          >
                            信箱
                          </span>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className={`form-control ${errors.email && "border-danger"}`}
                            placeholder="請輸入信箱"
                            {...register("email", {
                              required: "請輸入信箱。",
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "信箱格式不正確",
                              },
                            })}
                          />
                        </div>
                        <div className="text-danger fs-6 py-1">
                          &nbsp;{errors.email && errors.email.message}
                        </div>
                        <div className="input-group">
                          <span
                            className={`input-group-text ${errors.name && "border-danger"}`}
                          >
                            收件人姓名
                          </span>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className={`form-control ${errors.name && "border-danger"}`}
                            placeholder="請輸入收件人姓名"
                            {...register("name", {
                              required: "請輸入收件人姓名。",
                              minLength: {
                                value: 2,
                                message: "姓名至少 2 個字",
                              },
                            })}
                          />
                        </div>
                        <div className="text-danger fs-6 py-1">
                          &nbsp;{errors.name && errors.name.message}
                        </div>
                        <div className="input-group">
                          <span
                            className={`input-group-text ${errors.tel && "border-danger"}`}
                          >
                            收件人電話
                          </span>
                          <input
                            id="tel"
                            name="tel"
                            type="tel"
                            className={`form-control ${errors.tel && "border-danger"}`}
                            placeholder="請輸入收件人電話"
                            {...register("tel", {
                              required: "請輸入收件人電話。",
                              minLength: { value: 8, message: "電話至少 8 碼" },
                              pattern: {
                                value: /^\d+$/,
                                message: "電話僅能輸入數字",
                              },
                            })}
                          />
                        </div>
                        <div className="text-danger fs-6 py-1">
                          &nbsp;{errors.tel && errors.tel.message}
                        </div>
                        <div className="input-group">
                          <span
                            className={`input-group-text ${errors.address && "border-danger"}`}
                          >
                            收件人地址
                          </span>
                          <input
                            id="address"
                            name="address"
                            type="text"
                            className={`form-control ${errors.address && "border-danger"}`}
                            placeholder="請輸入收件人地址"
                            {...register("address", {
                              required: "請輸入收件人地址。",
                            })}
                          />
                        </div>
                        <div className="text-danger fs-6 py-1">
                          &nbsp;{errors.address && errors.address.message}
                        </div>
                        <div
                          className="input-group mb-3 p-1"
                          style={{
                            display: "block",
                            borderRadius: "5px",
                            border: "1px solid #EEE",
                          }}
                        >
                          <span
                            className="input-group-text"
                            style={{ borderRadius: "0px" }}
                          >
                            留言
                          </span>
                          <textarea
                            id="message"
                            style={{
                              width: "100%",
                              borderRadius: "0px",
                              border: "0px",
                            }}
                            className="form-control"
                            cols="30"
                            rows="10"
                            {...register("message")}
                          ></textarea>
                        </div>

                        <div className="p-2 text-end">
                          <button
                            type="submit"
                            id="formSumbitBtn"
                            className="btn mybtn my-2"
                            disabled={
                              btnLoadingId &&
                              btnLoadingId === "formSumbitBtn" &&
                              isSubmitting
                            }
                            style={{ borderRadius: "0px" }}
                            onClick={(e) => setBtnLoadingId(e.target.id)}
                          >
                            {btnLoadingId &&
                            isSubmitting &&
                            btnLoadingId === "formSumbitBtn" ? (
                              <Loading
                                isShow={btnLoadingId}
                                size={"20"}
                              ></Loading>
                            ) : (
                              <i className="bi bi-credit-card-2-back-fill me-1"></i>
                            )}
                            確認結帳
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="fs-3"
                style={{
                  paddingTop: "200px",
                  paddingBottom: "200px",
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
export default Cart;
