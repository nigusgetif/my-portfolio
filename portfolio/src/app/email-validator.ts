import { AbstractControl, ValidatorFn } from "@angular/forms";


export function validateEmail():ValidatorFn{
    return(control: AbstractControl) =>{
        const value = control.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if(value && !emailPattern.test(value)){
            return {invalidEmailDomain:true};
        }
        return null;
    };
} 