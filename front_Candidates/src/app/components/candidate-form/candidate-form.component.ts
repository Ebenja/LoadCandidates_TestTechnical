import { Component , inject} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CandidateServiceService } from '../../services/candidate-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [MatCard,
    MatFormField,
    MatLabel,
    MatCardHeader,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    // HttpClient
    // MatSnackBar
  ],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  candidateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
  });

  excelFile: File | null = null;

  constructor( private candidateService : CandidateServiceService, private http: HttpClient) {}

  onSubmit() {
    console.log(this.candidateForm.value);
    const formCandidate = new FormData();

    if (this.excelFile && this.candidateForm.valid){
      const formValue = this.candidateForm.value;

      if (formValue.name?.valueOf!=null && formValue.surname?.valueOf!=null)
      {
        formCandidate.append('name', formValue.name);
        formCandidate.append('surname', formValue.surname);
        formCandidate.append('file', this.excelFile);

        this.candidateService.postCandidate(formCandidate).subscribe( {next:(res) =>{
          this.openSnackBar('Add succesfully', 'X')
        },error: (error) => {
          this.openSnackBar('Error when try send candidate', 'X')
        },
      })

      }else{
        this.openSnackBar('Error, Review the inputs', 'X')
      }
      

      //  this.http.post('http://localhost:3000/candidates', this.candidateForm.value).subscribe((res)=> console.log(res));
    }else{
      this.openSnackBar('Error, Review the inputs', 'X')
    }

    

    
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.excelFile = file;
      console.log(this.excelFile)
    }
  }



}
