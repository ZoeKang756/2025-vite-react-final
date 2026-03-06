import { Outlet, Link, useSearchParams, useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import logo from "/images/1769653446695-1.jpg";
import * as bootstrap from "bootstrap";

const { VITE_API_PATH, VITE_BASE_URL } = import.meta.env;

function FrontendLayout() {
  const [cartsCount, setCartsCount] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const location = useLocation();
  const menuOffcanvas = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isStickySub, setIsStickySub] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleCartChange = (data) => {
    setCartsCount(data);
    console.log(`購物車數量變更${data}`);
  };

  const getCart = async () => {
    try {
      const res = await axios.get(
        `${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/cart`,
      );

      setCartsCount(res.data.data.carts.length);
    } catch (error) {
      console.error(error.response?.data);
    }
  };

  const showMenuOffcanvas = () => {
    menuOffcanvas.current.show();
  };

  const hideMenuOffcanvas = () => {
    menuOffcanvas.current.hide();
  };

  useEffect(() => {
    menuOffcanvas.current = new bootstrap.Offcanvas(
      document.getElementById("menuOffcanvas"),
    );
    getCart();
  }, [cartsCount]);

  useEffect(() => {
    const handleScroll = () => {
      // 偵測是否向下捲動超過 100px
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // 判斷是否向上捲動
      if (window.scrollY > lastScrollY) {
        // setIsStickySub(true);
      } else {
        // setIsStickySub(false);
      }

      setTimeout(() => {
        setLastScrollY(window.scrollY);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="container px-0">
        <div
          className={`bg-white mainMenu ${isSticky && "sticky"} ${isStickySub && "showSub"}`}
        >
          <div className="navbarMenu1">
            <div className="py-2 d-flex flex-nowrap justify-content-between text-secondary ">
              <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="inod 日本精品服飾" />
              </Link>
              <div className="d-flex flex-nowrap align-items-center">
                <div>
                  <i className="bi bi-search fs-5 me-1"></i>
                </div>

                <div>
                  <Link
                    className="text-secondary mx-2 text-decoration-none"
                    to="/cart"
                  >
                    <i className="bi bi-cart fs-5 me-1"></i>
                    <span className="badge bg-danger text-white">
                      {cartsCount}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <header>
            <div
              className="d-flex flex-nowrap justify-content-between text-secondary py-2 align-items-center rounded-top navbarMenu2"
              style={{ backgroundColor: "#eadceb" }}
            >
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler btn mybtn nobg"
                    type="button"
                    onClick={showMenuOffcanvas}
                    style={{ border: "none" }}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div id="topNavbar" className="collapse navbar-collapse">
                    <div className="navbar-nav">
                      <Link
                        className={`nav-link ${location.pathname === "/" && "active"}`}
                        to="/"
                      >
                        首頁
                      </Link>
                      <Link
                        className={`nav-link ${location.pathname === "/product" && !category && "active"}`}
                        to="/product"
                      >
                        所有商品
                      </Link>
                      <Link
                        className={`nav-link ${location.pathname === "/product" && category === "日本女裝" && "active"}`}
                        to="/product?category=日本女裝"
                      >
                        日本女裝
                      </Link>

                      <Link
                        className={`nav-link ${location.pathname === "/product" && category === "鞋包配件" && "active"}`}
                        to="/product?category=鞋包配件"
                      >
                        鞋包配件
                      </Link>
                      <Link
                        className={`nav-link ${location.pathname === "/shop" && "active"}`}
                        to="/shop"
                      >
                        購物說明
                      </Link>
                      <Link
                        className={`nav-link ${location.pathname === "/admin/login" && "active"}`}
                        to="/admin/product"
                      >
                        管理員登入
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="d-flex flex-nowrap align-items-center">
                <div>
                  <Link
                    className="text-secondary mx-2 text-decoration-none px-3 rounded-pill py-1"
                    to="/order"
                    style={{ backgroundColor: "#FFF" }}
                  >
                    <span>
                      <i className="bi bi-person fs-5"></i>我的訂單
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>

        <main>
          <Outlet context={{ handleCartChange }}></Outlet>
        </main>

        <footer
          className="p-4 text-secondary rounded-top"
          style={{ backgroundColor: "#bfb3c2", color: "#785571" }}
        >
          <div className="d-flex justify-content-between align-items-start">
            <ul className="nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  聯絡Inod
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  購物說明
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  最新消息
                </Link>
              </li>
            </ul>
            <div className="text-white"> © 2026 inod</div>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  網站使用條款
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  隱私權政策
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  免責聲明
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menuOffcanvas"
        aria-labelledby="menuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-center fs-5"
            id="menuOffcanvasLabel"
          >
            INOD 精品服飾
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={hideMenuOffcanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="navbar-nav">
            <Link
              className={`nav-link ${location.pathname === "/" && "active"}`}
              to="/"
              onClick={hideMenuOffcanvas}
            >
              首頁
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/product" && !category && "active"}`}
              to="/product"
              onClick={hideMenuOffcanvas}
            >
              所有商品
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/product" && category === "日本女裝" && "active"}`}
              to="/product?category=日本女裝"
              onClick={hideMenuOffcanvas}
            >
              日本女裝
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/product" && category === "鞋包配件" && "active"}`}
              to="/product?category=鞋包配件"
              onClick={hideMenuOffcanvas}
            >
              鞋包配件
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/shop" && "active"}`}
              to="/shop"
              onClick={hideMenuOffcanvas}
            >
              購物說明
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/admin/login" && "active"}`}
              to="/admin/product"
              onClick={hideMenuOffcanvas}
            >
              管理員登入
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FrontendLayout;
