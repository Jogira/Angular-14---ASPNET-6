import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employees: Employee[] = [
    {
      id: '5abvcaaca-asdasd-qwqea-z113-aasf',
      name: 'Jack-o',
      email: 'Valentine.aria@email.com',
      phone: 1233214567,
      salary: 50000,
      department: 'Gear Research'
    },
    {
      id: 'dasd13-asdasd-qwqea-z113-asd1x',
      name: 'May',
      email: 'Tostugeki@email.com',
      phone: 999999182,
      salary: 42000,
      department: 'Sea World'
    },
    {
      id: 'aszc-asdasd-xzczxc-z113-a134g',
      name: 'Ramlethal',
      email: 'Rekka.aria@email.com',
      phone: 1233214567,
      salary: 50000,
      department: 'Gear Research'
    }
  ];

  ngOnInit(): void {
    // this.employees.push()
  }
}
