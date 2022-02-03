import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { stock, stockCreationDTO } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient,private router: Router) { }

  private apiURL = environment.apiURL;

  getAllStock(): Observable<stock[]>{
    return this.http.get<stock[]>(this.apiURL + '/Admin/GetStocks');
  }

  getStockById(id: number): Observable<stock>{
    return this.http.get<stock>(this.apiURL + '/Admin/GetStockById/'+id);
  }

  create(stock: stockCreationDTO){
    return this.http.post(this.apiURL+'/Admin/AddStock', stock);
  }

  editStock(id: number, stock: stockCreationDTO){
    return this.http.put(this.apiURL+'/Stock/'+id, stock);
  }

  delete(id: number) {
    return this.http.delete(this.apiURL +'/Admin/DeleteStockById/'+ id);
  }
}
