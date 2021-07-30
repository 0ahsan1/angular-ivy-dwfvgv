import { Injectable } from '@angular/core';
import { CarModel } from '../models/car-model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarsModel } from '../models/cars-model';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}

  getCarCount(year: any): Observable<any> {
    const filter = encodeURIComponent(
      JSON.stringify({
        Year: year
      })
    );

    let httpOptions = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'KTjNGRNlAwM1h7wMOLjFJmNwSktGqblYcSmPlWIW',
        'X-Parse-REST-API-Key': 'FmN4YDKSuLQixdWpXwAmHmaiEIhXMkbxjh2RWSDm'
      })
    };

    return this.http.get<any>(
      'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?count=1&limit=0&where=' +
        filter,
      httpOptions
    );
  }

  getCars(skip: any = 0, limit: any = 20, year: any = 1970): Observable<any> {
    const filter = encodeURIComponent(
      JSON.stringify({
        Year: {
          $exists: true
        }
      })
    );

    let httpOptions = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'KTjNGRNlAwM1h7wMOLjFJmNwSktGqblYcSmPlWIW',
        'X-Parse-REST-API-Key': 'FmN4YDKSuLQixdWpXwAmHmaiEIhXMkbxjh2RWSDm'
      })
    };

    return this.http.get<CarsModel>(
      'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?skip=' +
        skip +
        '&limit=' +
        limit +
        '&order=Make,Model&where=' +
        filter,
      httpOptions
    );
  }
}
