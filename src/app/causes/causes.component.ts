import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent implements OnInit {

  public causes: any[];
  constructor() { }

  ngOnInit() {
    this.causes = [
      {
        displayName: 'Feed kids',
        description: 'description goes here..',
        images: ['http://lorempixel.com/500/250?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random()],
        campaigns: []
      },
      {
        displayName: 'Feed adults',
        description: 'description goes here..',
        images: ['http://lorempixel.com/500/250?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random()],
        campaigns: []
      },
      {
        displayName: 'Help Temples',
        description: 'description goes here..',
        images: ['http://lorempixel.com/500/250?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random()],
        campaigns: []
      },
      {
        displayName: 'Help Refuges',
        description: 'description goes here..',
        images: ['http://lorempixel.com/500/250?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random()],
        campaigns: []
      },
      {
        displayName: 'Educate girls',
        description: 'description goes here..',
        images: ['http://lorempixel.com/500/250?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random(), 'http://lorempixel.com/500/250/?'+Math.random()],
        campaigns: []
      }
    ];

  }



}
