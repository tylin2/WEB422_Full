import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService }  from '../music-data.service';

//import * as albumData from '../data/SearchResultsAlbums.json';
//import * as artistData from '../data/SearchResultsArtist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  albums: any = [];
  artist: any = [];
  routeSub: any;
  artistSub: any;
  albumSub: any;

  constructor(private route: ActivatedRoute, private mService: MusicDataService) {   
   }

  ngOnInit(): void {
    //this.albums = albumData.albums.items;
    //this.artist = (artistData as any).default;
    this.routeSub = this.route.params.subscribe(params=>{
      this.artistSub = this.mService.getArtistById(params.id).subscribe(artistData => this.artist = artistData);
      //editing
      this.albumSub = this.mService.getAlbumsByArtistId(params.id).subscribe(albumData => this.albums = albumData.items.filter((obj: { name: string; }) => !albumData.items[obj.name] && (albumData.items[obj.name] = true)));      
    });
  }

  ngOnDestroy(): void{
    this.artistSub.unsubscribe();
    this.albumSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
