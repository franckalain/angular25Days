import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Customer } from './customer';
import { FormGroup, FormBuilder, FormControl, Validators, Validator, AbstractControl } from '@angular/forms';

// custom validation code

function myValidator(min: number, max: number){
  return (c: AbstractControl): {[key: string]: boolean} | null => {
  if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
    return { rangeValidator: true }
  }
  return null;
};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formSeries';

  /*
  save(form: NgForm){
    console.log(form.value)
    console.log('template driven form works');
  }
  */
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required]
      // rating: ['', myValidator(1, 50)]
    });

  }

  loadData(){
    //this.customerForm.setValue({
      this.customerForm.patchValue({
      firstName: 'ange',
      //email: 'angealain7@yahoo.fr'
    })
  }

  save()
  {
    console.log(this.customerForm);
  }

}
