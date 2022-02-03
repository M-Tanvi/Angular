import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { suppliersCreationDTO } from '../suppliers.model';

@Component({
  selector: 'app-form-suppliers',
  templateUrl: './form-suppliers.component.html',
  styleUrls: ['./form-suppliers.component.css']
})
export class FormSuppliersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model!: suppliersCreationDTO;

  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<suppliersCreationDTO> = new EventEmitter<suppliersCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      companyName: ['', {
        validators: [Validators.required, Validators.minLength(3)]}],
        mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: '',
      contactPerson: ['', {validators: [Validators.required]}],
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const fieldname = this.form.get('companyName');
    const fieldnumber = this.form.get('mobileNo');
    const fieldperson = this.form.get('contactPerson');

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
    if(fieldperson?.hasError('required')){
      return 'This field is required';
    }

    return '';
  }

}
