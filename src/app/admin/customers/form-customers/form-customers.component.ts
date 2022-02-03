import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { customerCreationDTO } from '../customers.model';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css']
})
export class FormCustomersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  @Input()
  model!: customerCreationDTO;

  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<customerCreationDTO> = new EventEmitter<customerCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      clientName: ['', {
        validators: [Validators.required, Validators.minLength(3)]}],
      mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: '',
      city: ['', {validators: [Validators.required]}],
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const fieldname = this.form.get('clientName');
    const fieldnumber = this.form.get('mobileNo');
    const fieldcity = this.form.get('city');

    if (fieldname?.hasError('required')){
      return 'This field is required';
    }

    if (fieldname?.hasError('minlength')){
      return 'The minimum length is 3';
    }
    if (fieldnumber?.hasError('required')){
      return 'This field is required';
    }

    if (fieldnumber?.hasError('pattern')){
      return 'Please enter correct contact number';
    }
    if(fieldcity?.hasError('required')){
      return 'This field is required';
    }

    return '';
  }

}
