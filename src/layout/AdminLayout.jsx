import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router";
import Loading from "../components/Loading";
import GetAuthToken from "../utils/GetAuthToken";
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;

function AdminLayout() {
  const [isCheckedAuth, setIsCheckedAuth] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    const token = GetAuthToken();
    try {
      const checkRes = await axios.post(
        `${VITE_BASE_URL}/v2/logout`,
        {},
        {
          headers: { Authorization: token },
        },
      );
      document.cookie =
        "hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/admin/login");
    } catch (error) {
      console.log(error.response);
    }
  };

  const checkLogin = async () => {
    const token = GetAuthToken();
    try {
      const config = {
        headers: { Authorization: token },
      };
      const checkRes = await axios.post(
        `${VITE_BASE_URL}/v2/api/user/check`,
        {},
        config,
      );
    } catch (error) {
      console.log(error.response);
      navigate("/admin/login");
    } finally {
      setIsCheckedAuth(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      {isCheckedAuth ? (
        <div>
          <div className="container-fluid" style={{ padding: "0px" }}>
            <div className="d-flex">
              <div className="w-64 bg-indigo-500 text-white min-h-screen ">
                <div className="d-flex bg-indigo-700">
                  <div className="px-2 py-5">Logo</div>
                  <div className="p-5 flex-grow-1 text-2xl">後台管理</div>
                </div>
                <nav>
                  <ul>
                    <li className="py-2 m-2 text-white d-flex ">
                      <i className="bi bi-box-seam me-2"></i>
                      <div>產品管理</div>
                    </li>
                    <li className="py-2 m-2 text-white d-flex ">
                      <i className="bi bi-cart4 me-2"></i>
                      <div>活動管理</div>
                    </li>
                    <li className="py-2 m-2 text-indigo-300 d-flex hover:text-indigo-100">
                      <i className="bi bi-box2-heart me-2"></i>
                      <div>日本連線</div>
                    </li>
                    <li className="py-2 m-2 text-indigo-300 d-flex hover:text-indigo-100">
                      <i className="bi bi-people-fill me-2"></i>
                      <div>會員管理</div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex-grow-1">
                <div className="px-3 my-4 d-flex justify-content-end align-items-end">
                  <div className="mx-1">
                    <button
                      className="btn btn-secondary mb-1"
                      type="button"
                      onClick={logout}
                    >
                      <i className="bi bi-person-circle me-1"></i>
                      管理員登出
                    </button>
                  </div>
                  <div className="mx-1">
                    <button
                      className="btn btn-secondary mb-1"
                      type="button"
                      onClick={logout}
                    >
                      <i className="bi bi-gear me-1"></i>
                      系統設定
                    </button>
                  </div>
                </div>
                <div className="bg-indigo-400 px-5">
                  <nav>
                    <ul className="d-flex flex-row">
                      <li className="py-1 px-3 text-white d-flex">
                        <i className="bi bi-search me-2"></i>
                        <div className="me-2">產品搜尋</div>
                      </li>
                      <li className="py-1 px-3 text-white d-flex">
                        <i className="bi bi-card-list me-2"></i>
                        <div className="me-2">產品分類</div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="p-3">
                  <div className="rounded bg-gray-100 p-2 border border-gray-200 ">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <Loading isShow={true}></Loading>
        </div>
      )}
    </>
  );
}
export default AdminLayout;
