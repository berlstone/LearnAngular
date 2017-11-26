import { Validators,AbstractControl } from '@angular/forms';


export class CommentValidators{

    static cannotContainSplChar(control:AbstractControl){

        let spclChar = ['#','!','@','$','%','<','>'];
        let char :string;
        let value : string = control.value;
         
        for (var i = 0; i != spclChar.length; i++) {
            var substring = spclChar[i];
            if (value.indexOf(substring) != - 1) {
                char= substring;
            }
         }
         var result = {}
        if(char!=null)
            return { cannotContainSplChar : { result:true,char:char}} 
        else return null;
        
    }

    // static containsAny(str, substrings) {
    //     for (var i = 0; i != substrings.length; i++) {
    //        var substring = substrings[i];
    //        if (str.indexOf(substring) != - 1) {
    //          return substring;
    //        }
    //     }
    //     return null; 
    // }

}