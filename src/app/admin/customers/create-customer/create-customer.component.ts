import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { customerCreationDTO } from '../customers.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  errors: string[] = []; 

  constructor(private router: Router, private clientService: ClientsService) { }

  ngOnInit(): void {}
    
  saveChanges(customerCreationDTO: customerCreationDTO){
    this.clientService.create(customerCreationDTO).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }

}

