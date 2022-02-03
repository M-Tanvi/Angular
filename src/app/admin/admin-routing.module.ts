import { ReportsComponent } from './reports/reports.component';
import { StockComponent } from './stock/stock.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CustomersComponent } from './customers/customers.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSupplierComponent } from './suppliers/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
children: [
  {
  path:  'admin', component: AdminComponent, canActivate: [IsAdminGuard]
  },
  {
  path:  'dashboard', component: DashboardComponent, canActivate: [IsAdminGuard]
  },
  {
  path:  'login', component: LoginComponent
  },
  {
  path:  'register', component: RegisterComponent
  },
  { 
  path: 'logout', component: LogoutComponent},

  {
  path: 'medicines', component: MedicinesComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path:  'customers', component: CustomersComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path: 'customers/create', component: CreateCustomerComponent, canActivate: [IsAdminGuard]
  },
  {
  path: 'customers/edit/:clientId', component: EditCustomerComponent, canActivate: [IsAdminGuard]
  },
  {
  path: 'suppliers', component: SuppliersComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path: 'suppliers/create', component: CreateSupplierComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path: 'suppliers/edit/:companyId', component: EditSupplierComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path:  'stock', component: StockComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path: 'stock/create', component: CreateStockComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path: 'stock/edit/:companyId', component: EditStockComponent, canActivate: [IsAdminGuard]
  }, 
  {
  path:  'reports', component: ReportsComponent, canActivate: [IsAdminGuard]
  }, 
 
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
