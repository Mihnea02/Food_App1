import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public authService: AuthenticationService, private router: Router) {

  }

  logout() {
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['/login']);
    });
  }
}
