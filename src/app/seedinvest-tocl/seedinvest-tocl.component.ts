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
        "imageUrl": "http://lorempixel.com/300/500/",
        "ngoLogoUrl":"http://lorempixel.com/48/48/",
        "title":"Feed a kid",
        "shortDescription": "Feed hungry kids here."
      },
      {
        "imageUrl": "http://lorempixel.com/300/500?1",
        "ngoLogoUrl":"http://lorempixel.com/48/48?1",
        "title":"Help Orphans",
        "shortDescription": "Help orphans here."
      },
      {
        "imageUrl": "http://lorempixel.com/300/500?2",
        "ngoLogoUrl":"http://lorempixel.com/48/48?2",
        "title":"Help cancer patients",
        "shortDescription": "Help and save cancer patients here."
      },
      {
        "imageUrl": "http://lorempixel.com/300/500?3",
        "ngoLogoUrl":"http://lorempixel.com/48/48?3",
        "title":"Plant a tree",
        "shortDescription": "Plant a tree and save environment."
      }
    ];
  }
  


}
