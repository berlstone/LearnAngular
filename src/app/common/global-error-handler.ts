import { ErrorHandler } from "@angular/core";

export class GlobalErrorhandler extends ErrorHandler{

    handleError(error){
        console.log(error);
    }
}