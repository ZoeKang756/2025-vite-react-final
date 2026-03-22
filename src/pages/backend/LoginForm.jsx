import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import GetAuthToken from "../../utils/GetAuthToken";

const { VITE_BASE_URL } = import.meta.env;

function LoginForm() {
  const [loginErrMessage, setLoginErrMessage] = useState(null);
  const navigate = useNavigate();
  const [btnLoadingId, setBtnLoadingId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "onChange" });

  const onFormSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `${VITE_BASE_URL}/v2/admin/signin`,
        formData,
      );
      const { token, expired } = response.data;
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;

      reset();
      navigate("/admin/product");
    } catch {
      setLoginErrMessage("您的帳號或密碼錯誤!");
    } finally {
      setBtnLoadingId(null);
    }
  };

  const checkLogin = async () => {
    const token = GetAuthToken();
    try {
      const config = {
        headers: { Authorization: token },
      };
      await axios.post(`${VITE_BASE_URL}/v2/api/user/check`, {}, config);
      navigate("/admin/product");
    } catch {
      // error
    } 
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="container-fluid login bg-info">
      <div className="row justify-content-center p-3 rounded m-1 bg-white">
        <h1 className="h3 mb-3 font-weight-normal p-3 text-primary">
          <i className="bi bi-person-circle fs-1 me-1"></i>
          管理員登入
        </h1>
        <hr />
        <div className="col-10">
          <form
            id="form"
            className="form-signin"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <div className="input-group mb-3">
              <span className="input-group-text">帳號</span>
              <input
                id="username"
                type="email"
                className="form-control p-3"
                name="username"
                placeholder="請輸入帳號"
                {...register("username", {
                  required: "請輸入帳號",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email 格式不正確",
                  },
                })}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">密碼</span>
              <input
                type="password"
                className="form-control p-3"
                name="password"
                placeholder="請輸入密碼"
                {...register("password", {
                  required: "請輸入密碼",
                })}
              />
            </div>
            <button
              className="btn btn-lg btn-primary w-100 mt-3"
              type="submit"
              id="loginSubmitBtn"
              disabled={btnLoadingId && isSubmitting}
              onClick={(e) => setBtnLoadingId(e.target.id)}
            >
              {btnLoadingId &&
                isSubmitting &&
                btnLoadingId === "loginSubmitBtn" && (
                  <Loading isShow={btnLoadingId} size={"20"}></Loading>
                )}
              登入
            </button>
          </form>
          <div style={{ minHeight: "100px" }}>
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
            {loginErrMessage && (
              <p className="text-danger">{loginErrMessage}</p>
            )}
          </div>
        </div>
      </div>
      <p className="mt-5 mb-3 text-muted"> © Copyright - INOD</p>
    </div>
  );
}
export default LoginForm;
