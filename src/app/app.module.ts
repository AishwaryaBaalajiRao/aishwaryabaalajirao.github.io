import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MlworksComponent } from './home/mlworks/mlworks.component';
import { FoodrecognitionComponent } from './home/foodrecognition/foodrecognition.component';
import { ChickfilaComponent } from './home/chickfila/chickfila.component';
import { CaseStudiesComponent } from './home/case-studies/case-studies.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { AppearDirective } from './directive.module';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip); 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    MlworksComponent,
    FoodrecognitionComponent,
    ChickfilaComponent,
    CaseStudiesComponent,
    ResumeComponent,
    AboutComponent,
    ConnectComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxExtendedPdfViewerModule,
    AngularMaterialModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
