import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './companies.service';
import { Suppliers } from './suppliers.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  displayedColumns: string[] = ['company', 'address', 'contactperson', 'mobileno','actions'];
  suppliers: Suppliers[] = [];
  size = 3;
  pageIndex = 1;
  dataSource: Suppliers[] = [];
  p:number =1;

  constructor( private companiesservice : CompaniesService) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(){
    this.companiesservice.getAllSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
      this.dataSource = suppliers.slice(0, 2);
    });
  }

  deleteSupplier(id: number){
    this.companiesservice.delete(id)
    .subscribe(() => {
      this.loadSuppliers();
    });
  }

  paginate(event: any) {
    this.pageIndex=event;
    this.dataSource = this.suppliers.slice(event * this.size - this.size, event * this.size);
  }


}
