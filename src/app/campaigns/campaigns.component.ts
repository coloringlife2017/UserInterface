import { CampaignDetailsService } from './../campaign-details/campaign-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  public causes: any[];
  constructor(private campaignDetailsService: CampaignDetailsService) { }

  ngOnInit() {
    this.campaignDetailsService.getCampigns()
      .subscribe(
      (result) => this.causes = result,
      (err) => console.log(err)
      );
  }

}
