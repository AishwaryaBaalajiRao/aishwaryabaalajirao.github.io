import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip);
import * as AOS from "aos";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bio1 = 'My goal at the end of the day is to develop intelligent software solutions through innovative products that create an optimized experience for clients by alleviating pain points and introducing state-of-the-art features.';
  bio2 = 'As a former Senior Product Engineer, I am familiar with the nuances and work that go into developing innovative, scalable, and comprehensive products. I am adept at interacting with data scientists, engineers, creatives, and other business-oriented experts. I\'ve developed a keen eye for detail, which has come in handy when collaborating with cross-functional team members on requirements, visualisations, and prototypes. I\'m able to adopt a holistic approach to issue solving and actively maintain it throughout various phases.';
  bio3 = 'As the next step in my career journey, I am highly motivated in pursuing Data Analyst / Business Analyst / Business Intelligence Analyst jobs due to my passion for working with and visualizing data. Through my master\'s experience, I\'ve gained a deeper understanding of data analytics and it has allowed me to appreciate it from a business viewpoint while challenging my own assumptions.';
  achievements = ['Academic Excellence - 2019', 'Specialization Certificate in Signal Processing'];
  workachievements = ['Pat on the Back Award', 'Certificate of Recognition'];
  asuachievements = ['Summer Internship - Software Developer (May 2022 - August 2022) @ InterBiz Consulting', 'Global Challenge Lab - AT&T (Atlanta, Georgia)'];

  constructor() { }

  ngOnInit(): void {

    AOS.init();

gsap.registerPlugin(ScrollTrigger);

let getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section: any, i) => {
  section.bg = section.querySelector(".bg"); 
  
  // the first image (i === 0) should be handled differently because it should start at the very top.
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  });

});



  }


}
