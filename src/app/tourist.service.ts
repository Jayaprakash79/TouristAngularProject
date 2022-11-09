import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TouristService {


  constructor(private http:HttpClient) { }

  public doRegistration(Tourist:any){
    return this.http.post("http://localhost:7299/tourist/register",Tourist,{responseType:'text' as 'json'});
  }
  public getTourists(){
    return this.http.get("http://localhost:7299/tourist/getAllTourists");
  }
}

