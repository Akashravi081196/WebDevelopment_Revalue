import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public LoginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log("login Page")
    this.router.navigate(['login']);
  
  }

 
}