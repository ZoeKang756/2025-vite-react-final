import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading({ isShow, size }) {
  const [isShowLoading, setIsShowLoading] = useState(isShow);
  const [loadingSize, setLoadingSize] = useState("20");

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(isShow);
      if (size) setLoadingSize(size);
      else setLoadingSize("200");
    },100);
  }, [size, isShow]);

  return (
    <>
      {isShowLoading && (
        <span
          className={
            loadingSize === "200"
              ? "d-flex justify-content-center align-items-center"
              : "d-inline me-1"
          }
          style={
            loadingSize === "200"
              ? { height: "100%", minHeight: "500px", width: "100%" }
              : {}
          }
        >
          <RotatingLines
            visible={true}
            height={loadingSize}
            width={loadingSize}
            color="#eddcee"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass="d-inline"
          />
        </span>
      )}
    </>
  );
}
export default Loading;
