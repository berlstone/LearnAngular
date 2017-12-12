import { Validators, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { AsyncValidator } from '@angular/forms';


export class UsernameValidator{

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null  {
     const value: string = control.value as string;
        if (value.indexOf(' ') > -1)
            return {cannotContainSpace: true};

        return null;
    }
    static shouldBeUniquex(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).toLowerCase() === 'clinton')
        return {shouldBeUnique: true};
        else
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        console.log('entry');
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('ajax');
                if (control.value == 'clinton'){
                    control.setErrors({'shouldBeUnique': true});
                    resolve({shouldBeUnique: true});
                }
                else
                    resolve(null);
            }, 2000);

        });

    }
}
