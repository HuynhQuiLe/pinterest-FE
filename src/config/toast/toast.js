import { toast } from "react-toastify";

export const notify = {
  success: (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

    document.querySelector("#success").play();
  },
  error: (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    document.querySelector("#error").play();
  },
};

// export const notify = (message) => {
//   toast("Default Notification !");

//   toast.success(message, {
//     position: toast.POSITION.TOP_CENTER,
//   });

//   toast.error(message, {
//     position: toast.POSITION.TOP_LEFT,
//   });

//   toast.warn(message, {
//     position: toast.POSITION.BOTTOM_LEFT,
//   });

//   toast.info(message, {
//     position: toast.POSITION.BOTTOM_CENTER,
//   });

//   toast("Custom Style Notification with css class!", {
//     position: toast.POSITION.BOTTOM_RIGHT,
//     className: "foo-bar",
//   });
// };
