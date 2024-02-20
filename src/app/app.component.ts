import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormUIComponent } from './comp/form-ui/form-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-validate-testing';
}
