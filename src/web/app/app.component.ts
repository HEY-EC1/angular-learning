import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShainichiranComponent } from './components/shainichiran/shainichiran.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ↓ここに ShainichiranComponent を追加！
  imports: [RouterOutlet, ShainichiranComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}