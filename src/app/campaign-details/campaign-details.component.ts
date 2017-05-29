import { CampaignDetailsService } from './campaign-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  private campaignKey: string;
  private campaignDetails: any;
  public unitDonated: number = 1;
  constructor(private activatedRoute: ActivatedRoute,
    private campaignService: CampaignDetailsService) {

  }

  ngOnInit() {
    this.campaignKey = this.activatedRoute.snapshot.params['campId'];
    this.campaignService.getCampaignById(this.campaignKey)
      .subscribe(
      (result) => this.campaignDetails = result,
      (err) => console.log(err)
      );//.unsubscribe();
    //this.campaignDetails = (<any[]>JSON.parse(campaignDetailData))[0];
  }

  updateUnitQty(operation: string) {
    if (operation.toLowerCase() == 'add') {
      this.unitDonated++;
    } else {
      this.unitDonated > 1 ? this.unitDonated-- : this.unitDonated;
    }

  }

}
