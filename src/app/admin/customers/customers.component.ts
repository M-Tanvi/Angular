import { Customers } from './customers.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { Router } from '@angular/router';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['clientName', 'mobileNo', 'address', 'city','actions'];
  customers: Customers[] = [];
  size = 3;
  pageIndex = 1;
  dataSource: Customers[] = [];
  p:number =1;
 
  constructor( private clientservice: ClientsService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(){
    this.clientservice.getAllClients().subscribe(customers => {
      this.customers = customers;
      this.dataSource = customers.slice(0, 2);
    });
  }
  
  deleteCustomer(id: number){
    this.clientservice.delete(id)
    .subscribe(() => {
      this.loadCustomers();
      this.router.navigate(['/customers']);
    });
  }

  paginate(event: any) {
    this.pageIndex=event;
    this.dataSource = this.customers.slice(event * this.size - this.size, event * this.size);
  }

}
