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
  navBGColor = '#434242';
  navTextColor = 'white';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUrlName();
  }

  getUrlName() {
    const routeName = this.router.url;
    if (routeName === '/mlworks') {
      this.navTextColor = 'black';
      this.navBGColor = '#ddd6f3';
    } else if (routeName === '/foodrecogn') {
      this.navTextColor = 'black';
      this.navBGColor = '#4ca1af';
    } else if (routeName === '/analytics') {
      this.navTextColor = 'black';
      this.navBGColor = '#9FA5D5';
    } else if (routeName === '/about') {
      this.navTextColor = 'white';
      this.navBGColor = 'rgba(0, 0, 0, 0.8)';
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
