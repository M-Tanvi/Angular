import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { customerCreationDTO, Customers } from '../customers.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private clientservice: ClientsService,
    private router: Router, private location: Location) { }

    model!: Customers;
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.clientservice.getCustomerById(params['clientId']).subscribe(customer => this.model = customer);
      });
    }
  
    saveChanges(customerCreationDTO: customerCreationDTO){
      this.clientservice.editCustomer(this.model.clientId, customerCreationDTO ).subscribe(() => {
        this.location.back(); 
      });
    }
  
  }
  