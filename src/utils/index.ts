import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const notify = (type: string, msg: string, option: any = {}) => {
  toast(msg, { position: toast.POSITION.TOP_RIGHT, ...option, type: type });
};
