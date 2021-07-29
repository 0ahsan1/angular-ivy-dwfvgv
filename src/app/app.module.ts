import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsService } from './services/cars.service';
import { AppRoutingModule } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPipe } from './pipes/search-pipe';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    SearchPipe,
    AppComponent,
    HelloComponent,
    OverviewComponent,
    CarsComponent
  ],
  bootstrap: [AppComponent],
  providers: [CarsService]
})
export class AppModule {}
