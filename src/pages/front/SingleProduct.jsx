import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";
import useMessage from "../../hooks/useMessages";

const { VITE_API_PATH, VITE_BASE_URL } = import.meta.env;

function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { handleCartChange } = useOutletContext();
  const [btnLoadingId, setBtnLoadingId] = useState(null);
  const { showSuccessMsg, showErrorMsg } = useMessage();

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/product/${id}`,
      );

      setProduct(response.data.product);
    } catch (error) {
      console.error(error.response?.data);
    }
  };

  const getCart = async () => {
    try {
      const res = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart`,
      );

      handleCartChange(res.data.data.carts.length);
    } catch (error) {
      console.error(error.response?.data);
    }
  };

  const addToCart = async (e, id) => {
    setBtnLoadingId(e.target.id);
    e.preventDefault();
    const data = { product_id: id, qty: 1 };
    try {
      const response = await axios.post(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart`,
        { data: data },
      );
      showSuccessMsg("加入購物車成功");
      getCart();
    } catch (error) {
      showErrorMsg("加入購物車失敗");
      console.error(error.response?.data);
    } finally {
      setBtnLoadingId(null);
    }
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <>
      <div className="p-4 ">
        <div
          className="d-flex justify-content-between py-2"
          style={{ color: "#785571" }}
        >
          <h1 className="fs-4 fw-bold">
            <i className="bi bi-bluesky me-2"></i>日本女裝
          </h1>
        </div>
        <div className="m-1 row justify-content-between">
          <div className="col-9 d-flex flex-wrap justify-content-start">
            <div className="images-thumbnails bigger">
              <img src={product.imageUrl} alt="" />
            </div>
            {product.imagesUrl
              ? product.imagesUrl.map((img) => (
                  <div className="images-thumbnails bigger" key={img}>
                    <img src={img} alt="" />
                  </div>
                ))
              : ""}
          </div>
          <div className="col-3 shadow-sm">
            <div className="py-3 border-bottom">
              <h5
                className="card-title fw-bold fs-4"
                style={{ color: "#785571" }}
              >
                <span
                  className="badge me-1 mb-1"
                  style={{
                    backgroundColor: "#785571",
                    borderRadius: "0px",
                  }}
                >
                  {product.category}
                </span>
                {product.title}
              </h5>
            </div>

            <div className="fst-italic my-2">
              <div className="text-secondary text-decoration-line-through py-2">
                原價：{product.origin_price}
              </div>
              <div className="py-2" style={{ color: "#977b91" }}>
                特價：{product.price}
              </div>
            </div>

            <div className="py-2  border-bottom">{product.description}</div>
            <div className="py-2  border-bottom">{product.content}</div>

            <button
              id="addToCartBtn"
              className="btn mybtn my-3"
              disabled={btnLoadingId && true}
              onClick={(e) => addToCart(e, product.id)}
              style={{ borderRadius: "0px" }}
            >
              {btnLoadingId && btnLoadingId === "addToCartBtn" ? (
                <Loading isShow={btnLoadingId} size={"20"}></Loading>
              ) : (
                <i className="bi bi-cart-plus"></i>
              )}
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
