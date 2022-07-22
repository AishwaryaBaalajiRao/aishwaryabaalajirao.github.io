import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bio1 = 'My goal at the end of the day is to develop intelligent software solutions through innovative products that create an optimized experience for clients by alleviating pain points and introducing state-of-the-art features.';
  bio2 = 'As a former Senior Product Engineer, I am familiar with the nuances and work that go into developing innovative, scalable, and comprehensive products. I am adept at interacting with data scientists, engineers, creatives, and other business-oriented experts. I\'ve developed a keen eye for detail, which has come in handy when collaborating with cross-functional team members on requirements, visualisations, and prototypes. I\'m able to adopt a holistic approach to issue solving and actively maintain it throughout various phases.';
  bio3 = 'I have 2.1 years of experience working in a highly dynamic product development team experienced in various domains like machine learning, data science, frontend web development, analytics, and UX. Through this experience, I\'ve gained a deeper understanding of a product’s lifecycle and it has allowed me to appreciate it from a client’s viewpoint while challenging my own assumptions.';

  constructor() { }

  ngOnInit(): void {
  }

}
