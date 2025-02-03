import axios from "axios";

export const sendEmail = (base64content, values) => {
  return axios.post("http://localhost:4000/send-email", {
    base64content: base64content,
    fileName: `W/O # ${values.workOrder} - New Order Intake - Supply & Install`,
    subject: `W/O # ${values.workOrder} - New Order Intake - Supply & Install`,
    data: values,
  });
};
