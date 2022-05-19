import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Authentication } from './home/models/authentication.model'; 
import { AuthenticationHelper } from './home/helpers/authentication.helper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  auth : Authentication = new Authentication();
 
  constructor(
    private elementRef: ElementRef,
    private AuthenticationHelper : AuthenticationHelper,
  ) {
    this.auth = AuthenticationHelper.get() as Authentication;
  }
 
  ngAfterViewInit(): void {
    this.elementRef.nativeElement
      .ownerDocument.body.style.backgroundColor = '#8297c0';
  }

  logout(): void {
    if(window.confirm("Deseja realmente sair do sistema?"))
    {
      this.AuthenticationHelper.signOut();
      window.location.href="";
    }
  }
}
 


