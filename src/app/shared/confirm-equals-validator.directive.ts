import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
  selector: '[appConfirmEqualsValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ConfirmEqualsValidatorDirective, multi: true },
  ]
})
export class ConfirmEqualsValidatorDirective implements Validator {
  @Input('appConfirmEqualsValidator') defaultValue!: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent?.get(this.defaultValue);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    }

    return null;
  }

}
