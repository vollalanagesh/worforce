import { Injectable } from '@angular/core';
import {HttpParams,HttpClient,HttpHeaders} from '@angular/common/http'
import employeeList from 'src/assets/employeeList.json'
import { employeeListModel,EmployeeData} from 'src/app/models/employeeListModel'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  //public employeeListObject:any = employeeList
  public employeeListObject:employeeListModel
  pageHeader:string="Employee Page"
  constructor(private httpClient:HttpClient) { }
  baseUrl:string="https://reqres.in/api/"
  

  employeeList_localDB()
  {
    return this.employeeListObject
    
  }
  employeeList()
  {
    //const opts = { params: new HttpParams({"page": "1"}) };
    let params = new HttpParams();
    params = params.append('page', '1');
    //https://reqres.in/api/users?page=1
    return this.httpClient.get(this.baseUrl+'users',{params: params})
    
  }
  employeeDetails(employeeID:number)
  {
   
    //const opts = { params: new HttpParams({fromString: "_page=1&_limit=10"}) };
    //https://reqres.in/api/users?page=1
    return this.httpClient.get(this.baseUrl+'users/'+ employeeID )
    
    
  }
}
