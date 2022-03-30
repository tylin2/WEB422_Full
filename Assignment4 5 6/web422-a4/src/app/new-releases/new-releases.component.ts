import { Component, OnInit, Input } from '@angular/core';
import { MusicDataService }  from '../music-data.service';

//import * as data from '../data/NewReleasesAlbums.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  
  releases: any = [];  

  constructor(private mService: MusicDataService) {     
  }

  ngOnInit(): void {
    //this.releases = data.albums.items;
    this.mService.getNewReleases().subscribe(
      data=>{
        this.releases = data.albums.items;
      }
    );       
  }

}
