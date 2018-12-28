import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {LoginService} from '../services/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [LoginService]
})
export class HomeComponent implements OnInit {

  constructor( private ls: LoginService , private _router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit()
  {

/*    this.storage.set('TEST SESSION', 'SA MARCHE');
    console.log(this.storage.get('TEST SESSION'));*/
    this.ls.logIn().subscribe(

      data => {
        console.log(data.client.nom);
        this.storage.set('currentuser',data.client.nom);
      }
    )
  }

dashbord()
 {
  this._router.navigate(['/dashboard']);
}
}
