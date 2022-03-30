import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService }  from '../music-data.service';

//import * as data from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any = [];
  routeSub: any;
  albumSub: any;  

  constructor(private route: ActivatedRoute, private mService: MusicDataService, private snackBar: MatSnackBar) {     
  }

  ngOnInit(): void {    
    this.routeSub = this.route.params.subscribe(params=>{            
      this.albumSub = this.mService.getAlbumById(params.id).subscribe(data => this.album = data);      
    });
  }

  ngOnDestroy(): void{    
    this.albumSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  addToFavourites(trackID: any){
    this.mService.addToFavourites(trackID).subscribe(succes => {
      this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 });
    }, err => {
      console.log(err);
      this.snackBar.open("Adding to Favourites...", "Unable to add song to Favourites", { duration: 1500 });
    })
  }

}
