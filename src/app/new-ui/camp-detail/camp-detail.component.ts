import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camp-detail',
  templateUrl: './camp-detail.component.html',
  styleUrls: ['./camp-detail.component.css']
})
export class CampDetailComponent implements OnInit {

  constructor() {
    this.campaignDetail = { 
      title: 'Help a kid',
      shortDesc: 'this is one liner for the campaign'
    };
  }

  ngOnInit() {
  }

  public campaignDetail: any;


}
