import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from 'src/app/services/employee-service.service'
import {employeeListModel} from 'src/app/models/employeeListModel'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private e_service:EmployeeServiceService) { 

  }
  employeeList: any=[];
  p=1
  
  ngOnInit() {
    //this.employeeList= this.e_service.employeeList_localDB();
    if(sessionStorage.getItem('componentloaded')=="true")
    {
      this.employeeList=this.e_service.employeeListObject
    }
    else
    {
      this.e_service.employeeList().subscribe(res=>
        {
          //this.employeeList=res
          this.e_service.employeeListObject=<employeeListModel>res
          this.employeeList=this.e_service.employeeListObject
          console.log(this.employeeList.data.length)
          sessionStorage.setItem('componentloaded','true')
          //this.e_service.employeeDetails(2).subscribe(res=>console.log(res))
        });
    }

  }

}
