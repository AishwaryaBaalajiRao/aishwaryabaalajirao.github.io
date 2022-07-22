import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  links = ['Work', 'Resume', 'About Me'];
  changeNavColor = false;
  navBGColor: any;
  navTextColor: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUrlName();
  }

  getUrlName() {
    const routeName = this.router.url;
    console.log(routeName);
    if (routeName === '/mlworks') {
      this.navTextColor = 'white';
      this.navBGColor = '#28313b';
    } else if (routeName === '/foodrecogn') {
      this.navTextColor = 'black';
      this.navBGColor = '#eecda3';
    } else if (routeName === '/analytics') {
      this.navTextColor = 'white';
      this.navBGColor = '#43cea2';
    } else {
      this.navTextColor = 'black';
      this.navBGColor = '#e8dee6';
    }
  }

  navRoute(link: any) {
    if (link === 'Work') {
      this.router.navigate(['/']);
    }
    else if (link === 'Resume') {
      this.router.navigate(['/resume']);
    } else if (link === 'About Me') {
      this.router.navigate(['/about']);
    }
  }

}
