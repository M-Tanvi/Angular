import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stockCreationDTO } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  errors: string[] = []; 

  constructor(private router: Router, private stockservice: StockService) { }

  ngOnInit(): void {
  }

  saveChanges(stockCreationDTO: stockCreationDTO){
    this.stockservice.create(stockCreationDTO).subscribe(() => {
      this.router.navigate(['/stock']);
    });
  }

}