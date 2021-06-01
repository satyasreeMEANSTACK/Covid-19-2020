import { Component } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



 
  constructor(private smooth: SimpleSmoothScrollService) {}

  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
   
   
    
         
    }
    goTop(){
      this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
    }
 

}
