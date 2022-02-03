import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Suppliers, suppliersCreationDTO } from '../suppliers.model';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private companiesservice: CompaniesService,
    private router: Router) { }

    model!: Suppliers;
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.companiesservice.getSupplierById(params['companyId']).subscribe(supplier => this.model = supplier);
      });
    }
  
    saveChanges(suppliersCreationDTO: suppliersCreationDTO){
      this.companiesservice.editSupplier(this.model.companyId, suppliersCreationDTO ).subscribe(() => {
        this.router.navigate(['/suppliers']);
      });
    }
  
  }
  