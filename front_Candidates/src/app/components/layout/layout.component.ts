import { Component } from '@angular/core';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ CandidateFormComponent, CandidateListComponent ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class  LayoutComponent {

}
