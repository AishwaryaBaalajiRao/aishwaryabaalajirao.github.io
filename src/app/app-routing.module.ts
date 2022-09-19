import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { CaseStudiesComponent } from './home/case-studies/case-studies.component';
import { ChickfilaComponent } from './home/chickfila/chickfila.component';
import { FoodrecognitionComponent } from './home/foodrecognition/foodrecognition.component';
import { HomeComponent } from './home/home.component';
import { MlworksComponent } from './home/mlworks/mlworks.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mlworks', component: MlworksComponent},
  {path: 'foodrecogn', component: FoodrecognitionComponent},
  {path: 'analytics', component: ChickfilaComponent},
  {path: 'caseStudies', component: CaseStudiesComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'connect', component: ConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
