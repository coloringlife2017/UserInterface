import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seedinvest-tocl',
  templateUrl: './seedinvest-tocl.component.html',
  styleUrls: ['./seedinvest-tocl.component.css']
})
export class SeedinvestToclComponent implements OnInit {

  public campaigns:any;
  ngOnInit() {
  }
  
  constructor(){
    this.campaigns = [ 
      {
        "campaignImageUrl": "http://lorempixel.com/300/500/",
        "ngoLogoUrl":"http://lorempixel.com/48/48/",
        "campaignTitle":"Feed a kid",
        "campaignDescription": "Feed hungry kids here."
      },
      {
        "campaignImageUrl": "http://lorempixel.com/300/500?1",
        "ngoLogoUrl":"http://lorempixel.com/48/48?1",
        "campaignTitle":"Help Orphans",
        "campaignDescription": "Help orphans here."
      },
      {
        "campaignImageUrl": "http://lorempixel.com/300/500?2",
        "ngoLogoUrl":"http://lorempixel.com/48/48?2",
        "campaignTitle":"Help cancer patients",
        "campaignDescription": "Help and save cancer patients here."
      },
      {
        "campaignImageUrl": "http://lorempixel.com/300/500?3",
        "ngoLogoUrl":"http://lorempixel.com/48/48?3",
        "campaignTitle":"Plant a tree",
        "campaignDescription": "Plant a tree and save environment."
      }
    ];
  }
  


}
