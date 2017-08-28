import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-donation',
  templateUrl: './cl-donation.component.html',
  styleUrls: ['./cl-donation.component.css']
})
export class ClDonationComponent implements OnInit {

  public campaign;
  constructor() { 
    this.campaign = {
        "imageUrl": "http://lorempixel.com/300/500/",
        "ngoLogoUrl":"http://lorempixel.com/48/48/",
        "title":"Help feeding a kid",
        "shortDescription": "Feed hungry kids here.",
        "currencyType": {
          "currency": "$"
        },
        "impactUnits": [
          {
            "unitCost":10,
            "donationOptions": [25,50,100]
          }
        ]
      };
  }

  ngOnInit() {
  }

}
