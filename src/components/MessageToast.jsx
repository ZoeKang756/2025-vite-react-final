import { useSelector } from "react-redux";

function MessageToast() {
  const messages = useSelector((state) => state.message);

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className="toast show"
          role="alert"
          id="msgToast"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className={`toast-header text-white bg-${message.type}`}>
            <strong className="me-auto fs-5">{message.title}</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body bg-white">{message.text}</div>
        </div>
      ))}
    </div>
  );
}
export default MessageToast;
