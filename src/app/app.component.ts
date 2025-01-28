import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  // title = 'ang-material';
  fb = inject(FormBuilder);

  form = this.fb.group({  
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    address: [''],
    city: [''],
    state: [''],
    zip: [''],
    country: [''],
    phone: [''],
    dob: ['']
  });
}
