import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService }  from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any = [];
  searchQuery: any;
  routeSub: any;
  resultSub: any;
  querySub:any;

  constructor(private route: ActivatedRoute, private mService: MusicDataService) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      this.resultSub = this.mService.searchArtists(this.searchQuery).subscribe(data=>{
        this.results = data.artists.items
      });
    });

  }

  ngOnDestroy(): void{   
    this.resultSub.unsubscribe();
    this.routeSub.unsubscribe();
  } 

}
