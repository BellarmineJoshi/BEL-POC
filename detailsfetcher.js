import commonFunction from "../modules/commonFunction.js";
import Validator from "./validator.js";

const CommonFunction = new commonFunction();
const validator= new Validator();

const componentDetails = document.forms[0];
const inputElements = componentDetails.querySelectorAll("input");

for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "partNo") {
      validator.isvalidPartNo(inputElement);
    }
    else if (inputElement.name == "arrivalDate") {
      validator.isvalidArrivalDate(inputElement);
    }
    else if (inputElement.name == "componentType") {
      validator.isvalidComponentType(inputElement);
    }
    else if (inputElement.name == "orderNo") {
      validator.isvalidOrderNo(inputElement);
    }
  });
}


componentDetails.querySelector("button").addEventListener("click", (event) => {
  let booleans = [];
  for (let inputElement of inputElements){
    if (inputElement.name == "partNo") 
      booleans.push(validator.isvalidPartNo(inputElement));
    else if (inputElement.name == "arrivalDate")
      booleans.push(validator.isvalidArrivalDate(inputElement));
    else if (inputElement.name == "componentType") 
      booleans.push(validator.isvalidComponentType(inputElement));
    else if (inputElement.name == "orderNo") 
      booleans.push(validator.isvalidOrderNo(inputElement));
  }

  if (!CommonFunction.isTrue(booleans)) event.preventDefault();
  event.stopPropagation();

});