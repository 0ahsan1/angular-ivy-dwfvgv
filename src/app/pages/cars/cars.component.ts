import { Component, OnInit } from '@angular/core';
import { CarsModel } from '../../models/cars-model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public cars: CarsModel;
  constructor(private carsService: CarsService) {}
  search: number;
  ngOnInit() {
    this.getDate();
  }

  getDate() {
    this.carsService.getCars().subscribe(
      data => {
        this.cars = data;
        console.log(this.cars);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
