import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  public nav_menus = [];
  public routes : string[] = [];
  public current_nav_menu : string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    Object.keys(Menu_Title).forEach(key => {
      this.nav_menus.push(Menu_Title[key])
      this.routes.push(Menu_Route[key])
      });
  }

  onMenuItemClick(i) {
    this.current_nav_menu = this.nav_menus[i];
    this.router.navigateByUrl(this.routes[i]);
  }

}


enum Menu_Title { 
  Applicant = 'applicant'
}
enum Menu_Route {
  Applicant = '/admin/applicant',
}

