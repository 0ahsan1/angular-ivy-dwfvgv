import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { CarsModel } from '../../models/cars-model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  public carsCount: number = 0;
  timer = null;
  constructor(private carsService: CarsService) {}
  search: number;
  loading = false;

  getData(model) {
    this.loading = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.carsService.getCarCount(model).subscribe(
        data => {
          this.loading = false;
          console.log(data);
          this.carsCount = data.count;
        },
        err => {
          this.loading = false;
          console.log('err', err);
        }
      );
    }, 400);
  }
}
