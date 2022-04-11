import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tech_description = 'View my most significant technology projects varying from machine learning, frontend development and data analytics. The projects have been performed over the course of my undergraduate studies, work experience and masters program.  Simply click on each of the tiles below to learn more about the project and my role in them.'
  mgmt_description = 'View my most significant case studies on diverse high-performing organizations, which are based on a Harvard Course Pack that details the enormous problems these businesses confront in areas such as business strategy, leadership, and global business settings.  Simply click on the company name to view/download the case study in PDF format.'

  onMouseMove(e: any) {
    console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    var eye = document.querySelectorAll<HTMLElement>(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(e.clientX - x, e.clientY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
   
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

getMLWorks() {
  this.route.navigate(['/mlworks']);
}

getFoodRecog() {

}

getChickFilA() {
  
}
  

}
