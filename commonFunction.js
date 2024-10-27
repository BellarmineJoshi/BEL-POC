export default class commonFunction{

    getSibling(element,siblingElementName){
        if(element){
            return element.parentElement.querySelector(siblingElementName);
        }
        else{
            throw new Error("Given element is null");
        }
    }

    isTrue(booleans){
        for(let boolean of booleans){
            if(!boolean) return false;
        }
        return true;
    }

    setType(element, oldType, newType) {
        if (element) {
          if (element.type.match(oldType)) {
            element.type = newType;
          } else {
            element.type = oldType;
          }
        } else {
          throw new Error("Given element is null ...");
        }
      }

    resetForm(formElement){
        if(formElement){
            formElement.reset();
        }
        else{
            throw new Error("Given element is null");
        }
    }
}