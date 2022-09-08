import { Component, OnInit } from '@angular/core';
import {
  AccessibilityConfig,
  CarouselLibConfig,
  Image,
  ImageEvent
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-mlworks',
  templateUrl: './mlworks.component.html',
  styleUrls: ['./mlworks.component.scss']
})
export class MlworksComponent implements OnInit {

  logos = ['../../../assets/icons/Angular.png', '../../../assets/icons/mongodb.jpg', '../../../assets/icons/typescript.png', '../../../assets/icons/NodeJS.png'];
  description = 'Project Goal & Objective: Develop marketing profiles by finding the key factors that determine an individual\’s income. UVW College wants to boost their enrollment. It plans to develop a new marketing campaign based on the profiles we provide.';
  role1 = 'My role in the project included analyzing the data, researching python visualization libraries (Plotly, Seaborn, Matplotlib, Geopandas, etc.). After conducting this research, several multivariate plots were created through a series of trial-and-error method by including at least 8 out of the 14 variables from the given dataset.'
  role2 = 'After plotting the multivariate visuals, the main strategy was to choose the 4 main plots that had the most relevance with respect to predicting an individual\'s income which would in-turn help UVW College to boost their enrollment for programs through effective marketing strategies.';
  metrics = ['Developed a data and API driven, multi pages website for the product on Angular 9 framework. Data visualizations for Data Drift, Explainable AI, etc., were done using D3 library.',
   'The UI had day mode and a night mode interchangeability feature that increased user satisfaction in using a product by over 85%.',
  'Applied lazy loading technique to the project architecture that improved the website performance and traffic by 95% through significant reduction in webpage loading time.',
'Incorporated various security features like securing APIs from NoSQL injection attacks, application timeout handling and secure routes.',
'Various customer tracking metrics were placed on the website to track user site visits to the website (through login and sessions), time spent on each page, what features were used, project creation, etc.',
'Feedback page for users to contact the ML Works team about problems faced on website, feature request, product experience, etc.'];
  takeaways = ['Learnt various programming languages like Python, Angular, HTML/CSS/JavaScript, Git, and deployment process on Microsoft Azure with main expertise in the frontend technologies.',
'Picked up on leadership skills while leading the entire development of the demo applications.',
'Efficiently collaborated and communicated with diverse, cross-functional team members of all ranks within the company with great ease.',
'Developed technical capabilities and the business acumen to learn why we are doing the tasks, the business problem and how it is solved through a product development.',
'Learnt scrum and agile methodologies to develop a product with the use of tools like Jira, Confluence and Miro.',
'Learnt what to prioritize in a product lifecycle, for example, to cut the scope but not the quality of the product, metrics to account for to improve product visibility in the market and track product performance, etc.'];

LIBCONFIG102: CarouselLibConfig = {
  carouselConfig: {
    maxWidth: '1200px',
    maxHeight: '600px',
    showArrows: true,
    objectFit: 'cover',
    keyboardEnable: true,
    modalGalleryEnable: true
  },
  carouselPreviewsConfig: {
    visible: false
  },
  carouselPlayConfig: {
    autoPlay: false,
    interval: 5000,
    pauseOnHover: true
  }
};

  imagesRect: Image[] = [
  new Image(
    0,
    {
      img:
        '/assets/images/PDF1.png',
      description: 'Description 1'
    },
    {
      img:
        '/assets/images/PDF1.png',
      title: 'First image title',
      alt: 'First image alt',
      ariaLabel: 'First image aria-label'
    }
  ),
  new Image(
    1,
    {
      img:
        '/assets/images/PDF2.png'
    },
    {
      img:
        '/assets/images/PDF2.png'
    }
  ),
  new Image(
    2,
    {
      img:
        '/assets/images/PDF3.png',
      description: 'Description 3',
      title: 'Third image title',
      alt: 'Third image alt',
      ariaLabel: 'Third image aria-label'
    },
    {
      img:
        '/assets/images/PDF3.png',
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img:
        '/assets/images/PDF4.png',
      description: 'Description 4',
      title: 'Fourth image title (modal obj)',
      alt: 'Fourth image alt (modal obj)',
      ariaLabel: 'Fourth image aria-label (modal obj)'
    },
    {
      img:
        '/assets/images/PDF4.png',
      title: 'Fourth image title (plain obj)',
      alt: 'Fourth image alt (plain obj)',
      ariaLabel: 'Fourth image aria-label (plain obj)'
    }
  ),
  new Image(
    4,
    {
      img:
        '/assets/images/PDF5.png'
    },
    {
      img:
        '/assets/images/PDF5.png'
    }
  ),
  new Image(
    5,
    {
      img:
        '/assets/images/PDF6.png',
      description: 'Description 6'
    },
    {
      img:
        '/assets/images/PDF6.png'
    }
  )
];

  constructor() { }

  ngOnInit(): void {
  }

}
