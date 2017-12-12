
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export  class PasswordValidators{

    static checkOldPassword(control: AbstractControl ): ValidationErrors | null {

        const value: string = control.value as string;
        if (value == 'password')
            return {checkOldPassword: true};

        return null;

    }
    static repeatpassworderror(control: AbstractControl ): ValidationErrors | null {
        const newPassword = control.get('newpassword');
        const repeatPassword = control.get('repeatpassword');
        if (newPassword.value !== repeatPassword.value)
            return {repeatpassworderror: true};

        return null;
    }
}
