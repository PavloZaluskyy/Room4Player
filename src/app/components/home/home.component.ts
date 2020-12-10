import { Component, OnInit } from '@angular/core';
import { TopSoundsService } from 'src/app/shared/service/top-sounds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  constructor(private topSoundsService: TopSoundsService) {}

  ngOnInit(): void {
    this.topSoundsService.get()
    .subscribe(data => {this.data = data; this.data = this.data.tracks.track; console.log(this.data);
    })
  }

}
