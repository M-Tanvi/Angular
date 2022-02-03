import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stock, stockCreationDTO } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private stockservice:StockService,
    private router: Router) { }

    model!: stock;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.stockservice.getStockById(params['companyId']).subscribe(supplier => this.model = supplier);
    });
  }

  saveChanges(stockCreationDTO: stockCreationDTO){
    alert(this.model.stockID);
    this.stockservice.editStock(this.model.stockID, stockCreationDTO ).subscribe(() => {
      this.router.navigate(['/stock']);
    });
  }

}
