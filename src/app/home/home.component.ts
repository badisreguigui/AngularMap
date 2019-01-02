import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';


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
   // this.storage.set('currentuser',"user");
// /*    this.storage.set('TEST SESSION', 'SA MARCHE');
//     console.log(this.storage.get('TEST SESSION'));*/
//     this.ls.logIn().subscribe(

//       data => {
//         // console.log(data.client.nom);
//         // this.storage.set('currentuser',data.client.nom);
//         this.storage.set('currentuser',"user");
//       }
//     )
  }

dashbord(username,password)
 {
   this.ls.logIn(username.value,password.value).subscribe(

      data => {

      if(data.role=='Client')
      {
      console.log("je suis un client");
        this.storage.remove('currentuser');
        this.storage.set('login',username);
        this.storage.set('role','Client');
        this.storage.set('clientName',data.client.nom);
        this.storage.set('idconnected',data.user_id);
      }
      else if (data.role=='Resource')
      {
        console.log("je suis une resource");
        console.log(data.resource.firstname);
        console.log(username.value);
        this.storage.remove('currentuser');
        this.storage.set('role','Resource');
        this.storage.set('login',username.value);
        this.storage.set('resourceName',data.resource.firstname);
        this.storage.set('idconnected',data.user_id);
      }

      }
     )
  this._router.navigate(['/map']);
}
}
