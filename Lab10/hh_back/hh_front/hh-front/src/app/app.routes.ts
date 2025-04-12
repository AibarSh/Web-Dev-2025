import { Routes } from '@angular/router';
import { CompanyListComponent } from './Components/company-list/company-list.component';
import { CompanyDetailComponent } from './Components/company-detail/company-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
];
