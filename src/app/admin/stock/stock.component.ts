import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stock } from './stock.model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  displayedColumns: string[] = ['itemName', 'itemDetail', 'itemPrice', 'quantity','location','expiryDate','companyId','actions'];
  stock: stock[] = [];
  size = 3;
  pageIndex = 1;
  dataSource: stock[] = [];
  p:number =1;

  constructor( private stockservice : StockService, private router: Router) { }

  ngOnInit(): void {
    this.loadStock();
  }
  loadStock(){
    this.stockservice.getAllStock().subscribe(stock => {
      this.stock = stock;
      this.dataSource = stock.slice(0, 2);
    });
  }

  deleteStock(id: number){
    this.stockservice.delete(id)
    .subscribe(() => {
      this.router.navigate(['/stock']);
    });
  }

  paginate(event: any) {
    this.pageIndex=event;
    this.dataSource = this.stock.slice(event * this.size - this.size, event * this.size);
  }


}