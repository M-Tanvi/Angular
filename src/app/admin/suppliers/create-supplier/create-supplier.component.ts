import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { suppliersCreationDTO } from '../suppliers.model';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  errors: string[] = []; 

  constructor(private router: Router, private companiesservice: CompaniesService) { }

  ngOnInit(): void {
  }

  saveChanges(suppliersCreationDTO: suppliersCreationDTO){
    this.companiesservice.create(suppliersCreationDTO).subscribe(() => {
      this.router.navigate(['/suppliers']);
    });
  }

}
