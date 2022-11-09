import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TouristRegisterComponent } from './tourist-register/tourist-register.component';
import { ViewTabComponent } from './view-tab/view-tab.component';

const routes: Routes = [
  {path:"register",component:TouristRegisterComponent},
 { path:"view",component:ViewTabComponent},
 {path:"home",component:HomeComponent},
 {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
