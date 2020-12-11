import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map , debounceTime, distinctUntilChanged, switchMap, mergeMap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Search } from 'src/app/shared/interface/search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items = [{name: ''}];
  found: boolean = false
 
  urlStart: string = `http://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=`;
  urlEnd: string = `&api_key=040361bca02e5dfd2754c485aca37ca8&format=json`;
  
  constructor() { }
  getSearch(search){
    this.items = [{name: ''}];

    search = search.value;
    console.log(this.urlStart + search + this.urlEnd);
    fetch(this.urlStart + search + this.urlEnd)
      .then(date => date.json())
      .then(json => json.results.trackmatches.track)
      .then(data => {data.map(item => this.items.push(item));
        console.log(data);
        this.found = true;
      })
    
      .catch(err=> {console.log('Not Found'); this.found = false})
      

    
  //   const steam$ = fromEvent(search, 'input')
  //   .pipe(
  //      map(val=>val['target']['value'].trim()),
  //      debounceTime(1000),
  //      distinctUntilChanged(),
  //      map(val=>this.title = val),
  //      switchMap(val => ajax.getJSON(this.urlStart + val + this.urlEnd)),
  //       map(response => response['results']['trackmatches']['track']),
  //       distinctUntilChanged()
  //    )
  //  steam$.subscribe(val =>console.log(val));
   
  }

  ngOnInit(): void {
  }

}
