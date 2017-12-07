import { ErrorHandler } from "@angular/core";

export class GlobalErrorhandler extends ErrorHandler{

    handleError(error){
        alert("Message from global error handler: Please check console!");
        console.log(error);
    }
}