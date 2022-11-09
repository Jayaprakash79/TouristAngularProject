import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tourist } from '../Tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-tourist-register',
  templateUrl: './tourist-register.component.html',
  styleUrls: ['./tourist-register.component.css']
})
export class TouristRegisterComponent implements OnInit {
  tourist:Tourist=new Tourist();
  message:any;
  touristsregform : FormGroup | any;

  constructor(private service:TouristService) { }

  ngOnInit(): void {
    this.touristsregform= new FormGroup({
      'id': new FormControl(null,[Validators.required,Validators.max(9999),Validators.min(1)]),
      'firstName': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.maxLength(15)]),
      'lastName': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.maxLength(12)]),
      'gender': new FormControl(null,Validators.required),
      'age': new FormControl(null,[Validators.required,Validators.max(90),Validators.min(1)]),
      'fromPlace': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$')]),
      'numberofDaysVisits': new FormControl(null,[Validators.required,Validators.min(1)]),
    });
  }
  touristLogin(){
    console.log(this.tourist)
  }
  public registerNow(){
    let response=this.service.doRegistration(this.tourist);
    response.subscribe((data)=> this.message=data);
    alert("Registered successfully");
  }


}
