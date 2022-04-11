import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlworks',
  templateUrl: './mlworks.component.html',
  styleUrls: ['./mlworks.component.scss']
})
export class MlworksComponent implements OnInit {

  description = 'ML Works is a full-stack machine learning model management accelerator that enables MLOps at scale, from model development and orchestration to monitoring, health, diagnostics, governance, and business metric tracking. It offers white-box model deployment and monitoring, ensuring the comprehensive evaluation of the model\'s provenance, transparency, and explainability.';

  constructor() { }

  ngOnInit(): void {
  }

}
