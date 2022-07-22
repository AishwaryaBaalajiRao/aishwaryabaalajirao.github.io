import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlworks',
  templateUrl: './mlworks.component.html',
  styleUrls: ['./mlworks.component.scss']
})
export class MlworksComponent implements OnInit {

  logos = ['../../../assets/icons/Angular.png', '../../../assets/icons/mongodb.jpg', '../../../assets/icons/typescript.png', '../../../assets/icons/NodeJS.png'];
  description = 'ML Works is a full-stack machine learning model management accelerator that enables MLOps at scale, from model development and orchestration to monitoring, health, diagnostics, governance, and business metric tracking. It offers white-box model deployment and monitoring, ensuring the comprehensive evaluation of the model\'s provenance, transparency, and explainability.';
  role1 = 'I held the position of a full stack frontend developer for the ML Works product. I had the honor of being the sole frontend UI web developer for the demo application of ML Works where I developed multi webpages in under 5 days, kickstarting the development process into high gear.'
  role2 = 'Apart from the data-driven website development, I hep additional responsibilities like technical documentation for the team, requirement acquisitions directly from the product manager, close collaboration with data engineers and data scientists of the team for data visualization purposes.';
  product1 = 'With today\'s business constraints and uncertainties, it is critical that the AI/ML models that drive an organization\'s business choices remain successful. Model and data drift are both extremely real risks in today\'s ever-changing market, and AI/ML models must thus be checked in real time to guarantee they remain relevant. When machine learning models fail in live production, they not only consume valuable data scientists\' time to correct and redeploy them, but they also disrupt the company\'s day-to-day operations and put the business at danger of violating regulatory standards.';
  product2 = 'The ML Works accelerator was born to solve the above challenge by offering businesses with a visual provenance graph that enables end-to-end model visibility and pipeline traceability, as well as persona-based dashboards that simplify real-time model monitoring for all user types, from Data Engineers to business users. Additionally, it enables continuous model accuracy and relevance monitoring, with auto-triggered alarms in the case of model and data drift.';
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

  constructor() { }

  ngOnInit(): void {
  }

}
