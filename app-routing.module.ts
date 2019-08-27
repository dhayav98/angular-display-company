import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';
import { ListCompanyDetailsComponent } from './list-company-details/list-company-details.component';



const routes: Routes = [
  {path:'create-new-company',component:CreateNewCompanyComponent},
  {path:'list-company-details',component:ListCompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
