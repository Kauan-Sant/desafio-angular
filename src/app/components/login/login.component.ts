import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nome = '';
  senha = '';
  erro = '';

  constructor(private api: ApiService, private router: Router) {}

  logar() {
    this.api.login(this.nome, this.senha).subscribe({
      next: (res) => {
        console.log('Login OK:', res);
        this.erro = ''; 
  
        this.router.navigate(['/home']);  
      },
      error: (err) => {
        console.error('Erro ao logar:', err);
        this.erro = err.error.message || 'Erro desconhecido';
      }
    });
  }
  
}
