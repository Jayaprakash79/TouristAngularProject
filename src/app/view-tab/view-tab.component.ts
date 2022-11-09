import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.css']
})
export class ViewTabComponent implements OnInit {
  tourists:any;

  constructor(private service:TouristService) { }

  ngOnInit(): void {
    let response=this.service.getTourists();
    response.subscribe((data)=>this.tourists=data);
  }

}
