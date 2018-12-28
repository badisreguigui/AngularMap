import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nomRecupere:string;
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }


  ngOnInit()
  {

    this.nomRecupere=this.storage.get('currentuser');
  }



}
