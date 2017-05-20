import { campaignDetailData } from './campaignsDetailsData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  private campId: string;
  private campaignDetails: any;
  public unitDonated: number = 1;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.campId = this.activatedRoute.snapshot.params['campId'];
    this.campaignDetails = (<any[]>JSON.parse(campaignDetailData))[0];
  }

  updateUnitQty(operation: string) {
    if (operation.toLowerCase() == 'add') {
      this.unitDonated++;
    } else {
      this.unitDonated > 1 ? this.unitDonated-- : this.unitDonated;
    }

  }

}