import { Component, OnInit } from '@angular/core';
import {CompanyClientService} from '../service/company-client.service';

@Component({
  selector: 'app-list-company-details',
  templateUrl: './list-company-details.component.html',
  styleUrls: ['./list-company-details.component.css']
})
export class ListCompanyDetailsComponent implements OnInit {
  companies:string[];
  constructor(private companyService:CompanyClientService
    ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response)
  {
    console.log(response);
    this.companies=response;
  }

}



