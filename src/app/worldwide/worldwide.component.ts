import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Covid19Service } from '../covid19.service';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {

  title = 'Covid19';
  data:any

  constructor(public service:Covid19Service ,private spinner: NgxSpinnerService,private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {

    this.service.getData().subscribe(sampledata =>{
      console.log("sampledata>>>>>>>>>>>>",sampledata);
      this.data = sampledata;
      
          }),(err)=>{ console.log("error in worldwide.component.ts");
          }
  }

  
  refresh(){
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      
      this.spinner.hide();

      this.ngOnInit();

    }, 7000);

   

  }

}
