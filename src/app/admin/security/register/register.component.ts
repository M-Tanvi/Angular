import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import {  authenticationResponse, userCredentials } from '../security.models';
import { parseWebAPIErrors } from '../../utility';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService: SecurityService,
    private router: Router) { }

    errors: string[] = [];


  ngOnInit(): void {
  }

  register(userCredentials: userCredentials){
    this.errors = [];
    this.securityService.register(userCredentials).subscribe(authenticatorResponse =>
      { console.log('registr Tanvi');
        this.securityService.saveToken(authenticatorResponse);

      this.router.navigate(['/admin']);
    })
  }



}
