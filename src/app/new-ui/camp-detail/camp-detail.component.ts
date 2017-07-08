import { Component, OnInit } from '@angular/core';
import { Campaign, ImpactUnit } from "app/dto/Campaign";
import { CurrencyType } from "app/dto/Common";

@Component({
  selector: 'app-camp-detail',
  templateUrl: './camp-detail.component.html',
  styleUrls: ['./camp-detail.component.css']
})
export class CampDetailComponent implements OnInit {

  public campaignDetail:Campaign;
  constructor() {
    this.campaignDetail = new Campaign();

    this.campaignDetail.currencyType.currency = "$";
    this.campaignDetail.amountRaised = 100;
    this.campaignDetail.title = 'Help a kid';
    this.campaignDetail.shortDescription = 'Making the core systems of the home smarter, starting with the worls first smart home air vent';
    this.campaignDetail.description = 'long description of campaign and/or NGO: Making the core systems of the home smarter, starting with'
                                    + 'the worls first smart home air ventMaking the core systems of the home smarter, starting with the '
                                    +'worls first smart home air vent';
    this.campaignDetail.organizationName = 'Asha Foundation';
    this.campaignDetail.dateRange.startDateTime = new Date("7/7/2017").toString();
    this.campaignDetail.dateRange.endDataTime = new Date("8/7/2017").toString();
    this.campaignDetail.location.city = 'Sandy Springs';
    this.campaignDetail.location.state = 'GA';
    this.campaignDetail.maximumAmount = 3000;
    this.campaignDetail.amountRaised = 125;
    
    let impactUnit : ImpactUnit = new ImpactUnit();
    impactUnit.unitCost = 10.99;
    impactUnit.unitLabel = 'child';

    this.campaignDetail.impactUnits = [impactUnit];

  }

  ngOnInit() {
  }



}
