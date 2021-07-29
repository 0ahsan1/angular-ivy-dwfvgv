import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../../models/cars-model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public carsCount: any;
  constructor(private carsService: CarsService) {}
  search: number;
  ngOnInit() {
    this.getData();
  }

  getData(model?) {
    let models = 1980;
    if (model) {
      models = model;
    }
    this.carsService.getCarCount(1980).subscribe(
      data => {
        console.log(data);
        this.carsCount = data.count;
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
