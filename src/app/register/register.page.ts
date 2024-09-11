import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  

  ngOnInit() {}


  
  volver(){
    this.router.navigate(['/login'])
  }

  onRegister() {
    if (this.regForm.valid) {
      const { username, email, password } = this.regForm.value;
      console.log('Registro exitoso:', { username, email, password });
      // Aquí podrías añadir la lógica de registro (e.g., llamada a un servicio)
      this.router.navigate(['/login']); // Redirige al usuario al login después de registrarse
    } else {
      console.log('Formulario no válido');
    }
  }
}
