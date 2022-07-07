import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService ) { }

  ngOnInit(): void {
  }

  home() {
    console.log("Home Page")
    this.router.navigate(['']);
  }

  onLogin() {
    console.log("login Page")
    this.router.navigate(['login']);
  }

  onLogout() {
    localStorage.setItem("username", "");
    this.router.navigate(['/login']);
  }

  onDashBoard() {
    this.router.navigate(['/user']);
  }
 
  onClick() {
    this.router.navigate(['register'])
  }
 
  onAbout() {
    this.router.navigate(['About-us'])
  }

  onHome() {
    this.router.navigate(['home'])
  }
}
