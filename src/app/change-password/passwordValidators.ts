
import { Validators, AbstractControl,ValidationErrors } from '@angular/forms';

export  class PasswordValidators{

    static checkOldPassword(control : AbstractControl ): ValidationErrors | null {

        let value: string = control.value as string;
        if(value == "password")
            return {checkOldPassword:true}
        
        return null;

    }
    static repeatpassworderror(control : AbstractControl ): ValidationErrors | null {
        let newPassword = control.get("newpassword");
        let repeatPassword = control.get("repeatpassword");
        if(newPassword.value !== repeatPassword.value)
            return {repeatpassworderror:true}

        return null;
    }
}