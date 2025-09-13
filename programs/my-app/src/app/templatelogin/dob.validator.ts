import { Directive} from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator,  } from '@angular/forms';

@Directive({
  selector: '[validatedob]',
  providers: [
      {provide: NG_VALIDATORS, useExisting: DobValidator, multi:true}
  ]
})
export class DobValidator implements Validator {
 validate(dobdata: FormControl) : {[key : string]: any} {
    let dob = new Date(dobdata.value).setUTCHours(0, 0, 0, 0);
    let currentDate = new Date().setUTCHours(0, 0, 0, 0);;
    console.log(currentDate);
    console.log(dob);
    if (dob > currentDate) {
        console.log("Error");
        console.log(dobdata);
        return {"dobInvalid" : "DOB is future date"};
    } else {
        return null;
    }
 }
  
}
