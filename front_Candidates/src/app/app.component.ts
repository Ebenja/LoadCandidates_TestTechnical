import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatCard,
    MatFormField,
    MatLabel,
    MatCardHeader,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_Candidates';
}
