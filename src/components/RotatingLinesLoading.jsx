import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

function RotatingLinesLoading({ size }) {
  const [loadingSize, setLoadingSize] = useState("200");

  useEffect(() => {
    setLoadingSize(size);
  }, [size]);

  return (
    <>
      <RotatingLines 
        visible={true}
        height={loadingSize}
        width={loadingSize}
        color="#eddcee"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass="d-inline me-1"
      />
    </>
  );
}
export default RotatingLinesLoading;
