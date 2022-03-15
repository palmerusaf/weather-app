import { getFormValue } from "../modules/handle-input";

let location = "";
document.querySelector(`form`).addEventListener("submit", (e) => {
  const value = getFormValue(e);
  console.log(value);
});
