import { Component, OnInit } from '@angular/core';
import { MusicDataService }  from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any>;

  constructor(private mService: MusicDataService) { }

  ngOnInit(): void {
    this.mService.getFavourites().subscribe(
      data=>{
        this.favourites = data.tracks;
      }
    );
  }

  removeFromFavourites(id: any){
    this.mService.removeFromFavourites(id).subscribe(data => this.favourites = data.tracks);
  }

}
