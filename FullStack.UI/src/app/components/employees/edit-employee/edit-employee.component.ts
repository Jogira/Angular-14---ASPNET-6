import { EmployeesService } from 'src/app/services/employees.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeDetails: Employee =
    {
      id: '',
      name: '',
      email: '',
      phone: 0,
      salary: 0,
      department: ''
    };
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');

          if (id) {
            console.log("CAllING API")
            //Call API
            this.employeeService.getEmployee(id)
              .subscribe({
                next: (response) => {
                  this.employeeDetails = response;
                }
              });
          }
        }
      }
    )
  }
}
