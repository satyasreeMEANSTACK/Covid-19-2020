import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { NgForm } from '@angular/forms';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  list: any;
  listofone: any = [];
  selectedLevel: any;
  totalCount: any = {};
  isShow: boolean = false;
  pieChart: GoogleChartInterface = {
    chartType: 'pieChart',
  }


  constructor(private Country: Covid19Service) { }


  initChart(data1) {
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: data1,
      //firstRowIsData: true,
      options: { 'title': 'Representation in percentage', height:500 },
    };

  }
  ngOnInit(): void {


    this.Country.getcountries().subscribe((data) => {
      // console.log("country data>>>>>>>>>>>>>",data);

      this.list = data;
    },


      (err) => { console.log("error in countries.component.ts"); }

    )
  }


  saverange(sele) {
    this.isShow = false;
    this.Country.getBasedOnCounter(sele).subscribe((data) => {
      this.listofone = data;

      this.totalCount = this.listofone[this.listofone.length - 1]
      if (this.totalCount) {
        this.isShow = true;
        let data1 = [
          ['Country', 'Count'],

          ['Active', this.totalCount.Active],
          ['Deaths', this.totalCount.Deaths],
          ['Recovered', this.totalCount.Recovered],
          ['Confirmed', this.totalCount.Confirmed],
        ]
        this.initChart(data1);
        // this.initChart("");

      }
      //       console.log("this.listofone.length>>>>",this.listofone.length);

      //       console.log("this.listofone.length - 1>>>",this.listofone.length - 1);

      //       console.log("this.listofone [this.listofone.length - 1]>>>",this.listofone [this.listofone.length - 1]);

      console.log("totalCount>>>>>>", this.totalCount);





    })



  }

  selectedDate(date) {
    console.log("data>>>>>>", date);

    this.listofone.forEach(element => {
      if (element.Data == date) {
        this.listofone.push(element);
      }
    });
  }


}
