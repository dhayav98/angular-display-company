import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';
import { ListCompanyDetailsComponent } from './list-company-details/list-company-details.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewCompanyComponent,
    ListCompanyDetailsComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
