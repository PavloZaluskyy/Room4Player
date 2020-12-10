import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tougleMenu:boolean = false;
  tougleMobileMenu(element){
    this.tougleMenu = !this.tougleMenu
    if(this.tougleMenu){ 
      element.width = 100 + "%"; 
      element.opacity = 1;
    }
    else {
      element.width = 0 + "%";
      element.opacity = 0;
    }
  }
}
