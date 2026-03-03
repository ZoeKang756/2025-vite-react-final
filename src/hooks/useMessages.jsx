import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../slice/messageSlice";

export default function useMessage() {
  const dispatch = useDispatch();

  const showSuccessMsg = (message) => {
    dispatch(
      createAsyncMessage({
        success: true,
        message,
      }),
    );
  };

  const showErrorMsg = (message) => {
    dispatch(
      createAsyncMessage({
        success: false,
        message,
      }),
    );
  };

  return {
    showSuccessMsg,
    showErrorMsg,
  };
}
