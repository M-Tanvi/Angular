import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { customerCreationDTO, Customers } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient,private router: Router) { }

  private apiURL = environment.apiURL;

  getAllClients(): Observable<Customers[]>{
    return this.http.get<Customers[]>(this.apiURL + '/Admin/GetClients');
  }

  getCustomerById(id: number): Observable<Customers>{
    return this.http.get<Customers>(this.apiURL + '/Admin/GetClientById/'+id);
  }

  create(customer: customerCreationDTO){
    return this.http.post(this.apiURL+'/Admin/AddClient', customer);
  }

  editCustomer(id: number, customer: customerCreationDTO){
    return this.http.put(this.apiURL+'/Admin/UpdateClientById/'+id, customer);
  }

  delete(id: number) {
    return this.http.delete(this.apiURL +'/Admin/DeleteClientById/'+ id);
  }
}
