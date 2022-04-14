import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  projName: any;
  title: any;
  description: any;
  pdfDocument: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projName = this.activatedRoute.snapshot.paramMap.get('proj');
    this.getTitleDesc(this.projName);
  }

  getTitleDesc(projName: any) {
    if (projName === 'ryanair') {
      this.title = 'RYANAIR - CASE STUDY';
      this.description = 'A case-study on RyanAir\'s business model. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Ryanair Case Brief.pdf';
    }
    else if (projName === 'primark') {
      this.title = 'PRIMARK - CASE STUDY';
      this.description = 'A case-study on Primark\'s Business Model. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Primark Case Brief.pdf';
    } else if (projName === 'lv') {
      this.title = 'LOUIS VUITTON - CASE STUDY';
      this.description = 'A case-study on Louis Vuitton\'s Business Model. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Louis Vuitton - Case Brief.pdf';
    } else if (projName === 'newell') {
      this.title = 'NEWELL - CASE STUDY';
      this.description = 'A case-study on Newell\'s Business Model. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Newell - Case Brief.pdf';
    } else if (projName === 'primark') {
      this.title = 'ANGLO AMERICAN PLATINUM - STAKEHOLDER MANAGEMENT';
      this.description = 'A case-study on Anglo American\'s stakeholder management strategies. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Anglo American Platinum - Case Analysis.pdf';
    } else if (projName === 'primark') {
      this.title = 'AMAZON CHINA — CASE STUDY';
      this.description = 'A case-study on Amazon\'s strategy in China to gain competitive market share. Simply click on the PDF button below to view/download the document.';
      this.pdfDocument = 'assets/PDFs/Amazon China - Case Analysis.pdf';
    }
  }

}
