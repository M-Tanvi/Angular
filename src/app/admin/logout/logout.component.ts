import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public securityService: SecurityService,private router: Router) { }

  ngOnInit(): void {
    this.securityService.logout();
    this.router.navigate(['/login']);
  }

}
