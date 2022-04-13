import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickfilaComponent } from './home/chickfila/chickfila.component';
import { FoodrecognitionComponent } from './home/foodrecognition/foodrecognition.component';
import { HomeComponent } from './home/home.component';
import { MlworksComponent } from './home/mlworks/mlworks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mlworks', component: MlworksComponent},
  {path: 'foodrecogn', component: FoodrecognitionComponent},
  {path: 'analytics', component: ChickfilaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
