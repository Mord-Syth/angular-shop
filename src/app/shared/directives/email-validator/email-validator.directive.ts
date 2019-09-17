import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator][formControlName], [appEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: boolean } | null {

    if (c.value === '123@ya.com') {
      return { emailInvalid: true };
    }
    return null;
  }
}
