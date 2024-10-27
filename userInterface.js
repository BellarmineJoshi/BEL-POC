export default class UserInterface{
    
    BORDER_1PX_RED="1px solid red";
    BORDER_1PX_TRANSPARENT="1px soild transparent";

    setIcon(imgElement,oldImgPath,newImgPath){
        if(imgElement){
            if(imgElement.src.match(oldImgPath))
            imgElement.src=newImgPath;
        else
        imgElement.src=oldImgPath;
        }
        else
        throw new Error("Given img element is null");
    }

    setBorder(element,style){
        if(element){
            element.style.border = style;
        }
        else{
            throw new Error("Given img element is null");  
        }
    }

    setMessage(element,message){
        if(element){
            element.innerHTML =  message;
        }
        else{ 
            throw new Error("Given img element is null");
        }
    }

}
