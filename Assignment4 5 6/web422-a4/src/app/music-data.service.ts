import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';
import { environment } from './../environments/environment';

import { mergeMap } from 'rxjs/operators';
//import { truncate } from 'node:fs';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {  

  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient) { }  

  getNewReleases(): Observable<any> {
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
        return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases", { headers: { "Authorization": `Bearer ${token}` } });
      }));
  }

  getArtistById(id: any): Observable<any>{
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
    
  }

  getAlbumsByArtistId(id: any): Observable<any>{
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`, { headers: { "Authorization": `Bearer ${token}` } });
    }));   
  }

  getAlbumById(id: any): Observable<any>{
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }));    
  }

 
  searchArtists(searchString: any): Observable<any>{
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<any>(`https://api.spotify.com/v1/search?q=${searchString}&type=artist&limit=50`, { headers: { "Authorization": `Bearer ${token}` } });
    }));        
  }

  addToFavourites(id: any): Observable<[String]> {
    // TODO: make a PUT request to environment.userAPIBase/favourites/:id to add id to favourites
    return this.http.put<any>(`environment.userAPIBase/favourites/${id}`,id);
  }
  
  removeFromFavourites(id: any): Observable<any> {
    return this.http.delete<[String]>(`${environment.userAPIBase}/favourites/${id}`).pipe(mergeMap(favouritesArray => {
      // TODO: Perform the same tasks as the original getFavourites() method, only using "favouritesArray" from above, instead of this.favouritesList
      const index: number = favouritesArray.indexOf(id);
      if (index !== -1) {
        favouritesArray.splice(index, 1);
      }
      return this.getFavourites(); 
      // NOTE: for the empty array, you will need to use o=>o.next({tracks: []}) instead of o=>{o.next([])}
    }));
  }
  
  getFavourites(): Observable<any> {
    return this.http.get<[String]>(`${environment.userAPIBase}/favourites/`).pipe(mergeMap(favouritesArray => {
      // TODO: Perform the same tasks as the original getFavourites() method, only using "favouritesArray" from above, instead of this.favouritesList
      if(favouritesArray.length > 0){
        return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${favouritesArray.join(',')}`, { headers: { "Authorization": `Bearer ${token}` } });
        }));      
      } else {
        return new Observable(o=>o.next({tracks: []}));
      }
      // NOTE: for the empty array, you will need to use o=>o.next({tracks: []}) instead of o=>{o.next([])}
    }));
  }

  /*addToFavourites(id: any): boolean{
    if(id == null || typeof(id) == undefined || this.favouritesList.length >= 50){
      return false;
    } else{
      this.favouritesList.push(id);
      return true;
    }
  }

  removeFromFavourites(id: any): Observable<any>{
    const index: number = this.favouritesList.indexOf(id);
    if (index !== -1) {
        this.favouritesList.splice(index, 1);
    }
    return this.getFavourites(); 
  }

  getFavourites(): Observable<any> {
    if(this.favouritesList.length > 0){
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
        return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${this.favouritesList.join(',')}`, { headers: { "Authorization": `Bearer ${token}` } });
      }));      
    } else {
      return new Observable(o=>{o.next([])});
    }
  }*/

}