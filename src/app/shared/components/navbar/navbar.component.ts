import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: []
})
export class NavbarComponent implements OnInit {
  isUserLogged: boolean = false;
  loggedUserMail: string | null = null;
  isUserAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
