import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suppliers, suppliersCreationDTO } from './suppliers.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient,private router: Router) { }

  private apiURL = environment.apiURL;

  getAllSuppliers(): Observable<Suppliers[]>{
    return this.http.get<Suppliers[]>(this.apiURL + '/Admin/GetCompany');
  }


  getSupplierById(id: number): Observable<Suppliers>{
    return this.http.get<Suppliers>(this.apiURL + '/Admin/GetSupplierById/'+id);
  }

  create(supplier: suppliersCreationDTO){
    return this.http.post(this.apiURL+'/Admin/AddCompany', supplier);
  }

  editSupplier(id: number, supplier: suppliersCreationDTO){
    return this.http.put(this.apiURL+'/Admin/UpdateCompanyById/'+id, supplier);
  }

  delete(id: number) {
    return this.http.delete(this.apiURL +'/Admin/DeleteCompanyById/'+ id);
  }
}
