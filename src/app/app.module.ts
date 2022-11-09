import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouristRegisterComponent } from './tourist-register/tourist-register.component';
import { TouristService } from './tourist.service';
import { ViewTabComponent } from './view-tab/view-tab.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TouristRegisterComponent,
    ViewTabComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [TouristService],
  bootstrap: [AppComponent]
})
export class AppModule { }
