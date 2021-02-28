import { Component } from '@angular/core';
import {EmployeeServiceService} from 'src/app/services/employee-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeesDashboard';
  p_Header:string
  constructor(private e_service:EmployeeServiceService)
  {
    
  }
  
}
