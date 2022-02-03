import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import { AdminComponent } from './admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MedicinesComponent } from './medicines/medicines.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { StockComponent } from './stock/stock.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { DisplayErrorsComponent } from './display-errors/display-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeViewComponent } from './authorize-view/authorize-view.component';
import { LogoutComponent } from './logout/logout.component';
import { FormCustomersComponent } from './customers/form-customers/form-customers.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { FormSuppliersComponent } from './suppliers/form-suppliers/form-suppliers.component';
import { CreateSupplierComponent } from './suppliers/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { FormStockComponent } from './stock/form-stock/form-stock.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent,
    DashboardComponent,
    MedicinesComponent,
    CustomersComponent,
    SuppliersComponent,
    StockComponent,
    ReportsComponent,
    AuthenticationFormComponent,
    LoginComponent,
    RegisterComponent,
    DisplayErrorsComponent,
    AuthorizeViewComponent,
    LogoutComponent,
    FormCustomersComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    FormSuppliersComponent,
    CreateSupplierComponent,
    EditSupplierComponent,
    CreateStockComponent,
    FormStockComponent,
    EditStockComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    MatSelectModule,
    SweetAlert2Module.forRoot(),
  ]
})
export class AdminModule { }
