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
  const [primaryImage, setPrimaryImage] = useState(null);

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/product/${id}`,
      );

      setProduct(response.data.product);
      setPrimaryImage(response.data.product.imageUrl);
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
      await axios.post(`${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart`, {
        data: data,
      });
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
        <div className="py-1 border-top border-bottom">
          <h5 className="fw-bold fs-4 text-start" style={{ color: "#785571" }}>
            <span
              className="badge me-1 mt-1"
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
        <div className="m-1 row justify-content-between">
          <div className="col-lg-8 col-12 d-flex flex-wrap justify-content-start">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="">
                  <img
                    src={primaryImage}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-3  col-12">
                <div className="d-flex flex-wrap justify-content-start">
                  <div
                    className="images-thumbnails"
                    style={{ width: "130px", height: "130px" }}
                  >
                    <img
                      src={product.imageUrl}
                      onClick={() => setPrimaryImage(product.imageUrl)}
                      alt=""
                      style={{ overflow: "hidden" }}
                    />
                  </div>
                  {product.imagesUrl
                    ? product.imagesUrl.map((img) => (
                        <div
                          className="images-thumbnails"
                          key={img}
                          style={{ width: "130px", height: "130px" }}
                        >
                          <img
                            src={img}
                            onClick={() => setPrimaryImage(img)}
                            alt=""
                            style={{ overflow: "hidden" }}
                          />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 ">
            <div className="my-1 p-3 shadow-sm border-bottom text-start">
              {product.content}
            </div>

            <div className="shadow-sm">
              <div className="fst-italic my-2">
                <div className="text-secondary text-decoration-line-through py-2">
                  原價：{product.origin_price}
                </div>
                <div className="py-2" style={{ color: "#977b91" }}>
                  特價：{product.price}
                </div>
              </div>

              <div className="py-2  border-bottom">{product.description}</div>

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
      </div>
    </>
  );
}
export default SingleProduct;
