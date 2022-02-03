import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { CompaniesService } from '../../suppliers/companies.service';
import { Suppliers } from '../../suppliers/suppliers.model';
import { GeoLocationService } from '../geo-location-service';
import { stockCreationDTO } from '../stock.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';



@Component({
  selector: 'app-form-stock',
  templateUrl: './form-stock.component.html',
  styleUrls: ['./form-stock.component.css']
  
})
export class FormStockComponent implements OnInit {
  myControl = new FormControl();
  options: Suppliers[] = [];
  filteredOptions!: Observable<Suppliers[]>;
  constructor(private formBuilder: FormBuilder, private companiesservice:CompaniesService) { }
  selectedSupplier: any;
  hide:boolean =true;

  @Input()
  model!: stockCreationDTO;

  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<stockCreationDTO> = new EventEmitter<stockCreationDTO>();

  ngOnInit(): void {
    this.companiesservice.getAllSuppliers().subscribe(suppliers => {
      this.options = suppliers;
    });
   
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.companyName)),
      map(companyName => (companyName ? this._filter(companyName) : this.options.slice())),
    );

    this.form = this.formBuilder.group({
      itemName: ['', {
        validators: [Validators.required, Validators.minLength(3)]}],
        itemDetail:'',
        itemPrice: ['', {validators: [Validators.required]}],
        quantity: ['', {validators: [Validators.required]}],
        location: '',
        expiryDate: ['2022-01-19', {validators: [Validators.required]}],
        companyId:['', {validators: [Validators.required]}]
        
      });

    
    if (this.model !== undefined){
      this.hide=false;
      this.form.patchValue(this.model);
    }
  }

  displayFn(suppliers: Suppliers): string {
    return suppliers && suppliers.companyName ? suppliers.companyName : '';
  }

  private _filter(companyName: string): Suppliers[] {
    const filterValue = companyName.toLowerCase();

    return this.options.filter(option => option.companyName.toLowerCase().includes(filterValue));
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    this.myControl.patchValue('');
    this.selectedSupplier = event.option.value;
  }
 
  saveChanges(){
    const companyId = this.selectedSupplier;
    this.form.get('companyId')?.setValue(companyId);
    this.onSaveChanges.emit(this.form.value);
    console.log(this.form.value);
  }

  getErrorMessageFieldName(){
    const fieldname = this.form.get('itemName');
    const fielditemPrice = this.form.get('itemPrice');
    const fieldquantity = this.form.get('quantity');
    const fielditemDate = this.form.get('expiryDate');
    const fieldid = this.form.get('supplier');

    if ((fieldname?.hasError('required')) || (fielditemPrice?.hasError('required')) || (fieldquantity?.hasError('required')) || (fielditemDate?.hasError('required')) || (fieldid?.hasError('required'))){
      return 'This field is required';
    }

    return '';
  }

}
