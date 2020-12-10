import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopSounds } from '../interface/top-sounds';

@Injectable({
  providedIn: 'root'
})
export class TopSoundsService {
  private url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=040361bca02e5dfd2754c485aca37ca8&format=json'

  constructor(private http: HttpClient) {}
  get():Observable<TopSounds[]>{
    return this.http.get<TopSounds[]>(this.url);
  }
}
