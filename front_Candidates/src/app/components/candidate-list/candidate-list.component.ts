import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCard, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    MatCard,
    MatLabel,
    MatCardHeader,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    CommonModule
    
  ],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.css'
})
export class CandidateListComponent {
  candidates: any[] = [];
  
  displayedColumns: string[] = ['Name', 'Surname', 'Seniority','Years', 'Availability']


  
  ngOnInit() {
    // this.http.get<any[]>('http://localhost:3000/empleado/list')
    //   .subscribe(data => {
    //     this.empleados = data;
    //   });
    // this.candidates = [
    //   { 
    //     Name: 'pd',
    //     Surname: 'dd',
    //     Seniority:'dd',
    //     Years:'dd',
    //     Availability:'dd',
    //   },
    //   { 
    //     Name: 'pd1',
    //     Surname: 'dd1',
    //     Seniority:'dd',
    //     Years:'dd',
    //     Availability:'dd',
    //   },
    //   { 
    //     Name: 'pd2',
    //     Surname: 'dd2',
    //     Seniority:'dd',
    //     Years:'dd',
    //     Availability:'dd',
    //   }
    // ]
  }
}
