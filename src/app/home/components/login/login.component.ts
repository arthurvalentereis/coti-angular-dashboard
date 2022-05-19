import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../models/authentication.model';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthenticationHelper } from '../../helpers/authentication.helper';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private authenticationService: AuthenticationService,
    private authenticationHelper: AuthenticationHelper,
    private spinner: NgxSpinnerService,
    private route:Router,
  ) {
    if (this.authenticationHelper.get())
      this.route.navigate(['/admin/dashboard']);
      // window.location.href = '/admin/dashboard';
  }
 
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
 
  get form(): any {
    return this.formLogin.controls;
  }
 
  ngOnInit(): void {
  }
 
  onSubmit() {
    this.spinner.show();
    this.authenticationService.postLogin(this.formLogin.value)
      .then(
        (data: Authentication) => {
          this.authenticationHelper.signIn(data);
          this.formLogin.reset();
          // window.location.href = '/admin/dashboard';
          this.route.navigate(['/admin/dashboard']);
        }
      )
      .catch(
        (e) => {
          switch (e.response.status) {
            case 401: this.mensagem = e.response.data.message; break;
          }
        }
      )
      .finally(
        () => { this.spinner.hide(); }
      )
  }
 
}
 


