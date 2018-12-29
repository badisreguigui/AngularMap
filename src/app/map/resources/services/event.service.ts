import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class EventService {
  headers= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  titre:string;
  constructor(private http: HttpClient) {
  }
  public getAllVacations() {
    let obj:number=0;
    let titre:string ='';
    this.http.get('http://localhost:18080/InfinityMAP-web/rest/VacationService/getVacation').forEach(function (value) {
      for (let i = 0; i < 10; i++) {
        obj=value[i]['id'];
        titre=value[i]['typeLeave'];
      }
    });
    return titre;
  }

  public getEvents() {

    let data = this.http.get('http://localhost:18080/InfinityMAP-web/rest/VacationService/getVacation');
    return (data);

  }

}
