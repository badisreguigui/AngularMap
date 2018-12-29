import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from '../../../../node_modules/angular-webstorage-service';

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
