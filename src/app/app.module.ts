import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { DistrictsComponent } from './districts/districts.component';
import { WorldwideComponent } from './worldwide/worldwide.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DistrictsComponent,
    WorldwideComponent,
    PagenotfoundComponent,
    AboutComponent,
    SymptomsComponent,
    PreventionComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    
    Ng2GoogleChartsModule ,
    SimpleSmoothScrollModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
