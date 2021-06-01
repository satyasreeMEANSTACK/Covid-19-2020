import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CountriesComponent } from './countries/countries.component';
import { DistrictsComponent } from './districts/districts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { WorldwideComponent } from './worldwide/worldwide.component';

const routes: Routes = [
  {path:"countries",component:CountriesComponent},
  {path:"districts",component:DistrictsComponent},
  {path:"worldwide",component:WorldwideComponent},
  {path:"about",component:AboutComponent},
  {path:"Symptoms",component:SymptomsComponent},
  {path:"Prevention",component:PreventionComponent},



  {path:"",redirectTo:"/worldwide",pathMatch:"full"},
  
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
