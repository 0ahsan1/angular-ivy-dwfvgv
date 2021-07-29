import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'cars', component: CarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
