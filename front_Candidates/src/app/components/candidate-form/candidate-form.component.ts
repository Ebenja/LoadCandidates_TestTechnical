import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [MatCard,
    MatFormField,
    MatLabel,
    MatCardHeader,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {
  candidateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
  });

  excelFile: File | null = null;
  // constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(this.candidateForm.value);
    const formCandidate = new FormData();

    if (this.excelFile && this.candidateForm.valid){
      // formCandidate.append('name', this.candidateForm.get('name')?.value);
      // formCandidate.append('surname', this.candidateForm.get('surname')?.value);
      formCandidate.append('file', this.excelFile);

      // this.http.post('http://localhost:3000/candidates', this.candidateForm.value).subscribe((res)=> console.log(res));
    }

    

    
  }

  onFileChange(event: any) {
    const excelFile = event.target.files[0];
    if (this.excelFile) {
      // const fr = new FileReader();
      // fr.onload = () => {
      //   console.log(fr.result);
      // };
      // fr.readAsDataURL(this.excelFile);
      this.excelFile= excelFile;
    }
  }



}
