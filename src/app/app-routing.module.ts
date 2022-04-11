import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MlworksComponent } from './home/mlworks/mlworks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mlworks', component: MlworksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
