import { Component, OnInit, Input } from '@angular/core';

import * as data from '../data/NewReleasesAlbums.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  
  releases: any = [];

  constructor() {     
  }

  ngOnInit(): void {
    this.releases = data.albums.items;        
  }

}
