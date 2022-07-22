import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  description = 'View my most significant work experiences and projects in my resume below. Simply click on the resume below to view / download it as a PDF.';
  resumeDocument = 'assets/PDFs/Resume.pdf';
  

  constructor() { }

  ngOnInit(): void {
  }

}
