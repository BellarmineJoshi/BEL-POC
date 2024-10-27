import commonFunction from "../modules/commonFunction.js";
import UserInterface from "../modules/userInterface.js";

const ui = new UserInterface();
const CommonFunction = new commonFunction();
 
export default class Validator{
  
  
  NUMERIC_CHARACTER_REGEX_PATTERN = /\d/;
  SPECIAL_CHARACTER_REGEX_PATTERN = /[^a-zA-Z0-9\s]/;
  EMAIL_PASSWORD_REGEX_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  UPPERCASE_REGEX_PATTERN = /[A-Z]/;

  isvalidPartNo(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = CommonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Part number cannot be empty");
        return false;
      }

      if (this.SPECIAL_CHARACTER_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Part number cannot contain special characters");
        return false;
      }

      const partNoPattern = /^[A-Z]+\d+$/;
      if (!partNoPattern.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Part number must start with letters followed by digits");
        return false;
      }

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;
      
    }
    else {
      throw new Error("Given element is null");
    }
  }



  isvalidArrivalDate(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = CommonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Arrival  date cannot be empty");
        return false;
      } 

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

    } else {
      throw new Error("Given element is null ...");
    }
  }


  isvalidComponentType(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = CommonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Component type cannot be empty");
        return false;
      }  

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

    } else {
      throw new Error("Given element is null ...");
    }
  }


  isvalidOrderNo(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = CommonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "*Order number cannot be empty");
        return false;
      } 

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

    } else {
      throw new Error("Given element is null ...");
    }
  }

}