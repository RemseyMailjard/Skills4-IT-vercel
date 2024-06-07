import { toast } from "react-toastify";

export const SuccessNotification = (message: any, title: any) => {
  toast.success(
    <div className="flex flex-col">
      {title && <div className="font-bold">{title}</div>}
      <div className="text-sm">{message}</div>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};
export const InfoNotification = (message: any, title: any) => {
  toast.info(
    <div className="flex flex-col">
      {title && <div className="font-bold">{title}</div>}
      <div className="text-sm">{message}</div>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};
export const ErrorNotification = (message: any, title: any) => {
  toast.error(
    <div className="flex flex-col">
      {title && <div className="font-bold">{title}</div>}
      <div className="text-sm">{message}</div>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};
