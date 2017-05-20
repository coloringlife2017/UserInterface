import { campaignData } from './campaignsData';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  public causes: any[];
  constructor(private http: Http) { }

  ngOnInit() {
    let rawData: any[] = JSON.parse(campaignData);
    this.causes = rawData.sort(
      (campaign1: any, campaign2: any) => campaign1.displayOrder - campaign2.displayOrder
    );
  }

}
