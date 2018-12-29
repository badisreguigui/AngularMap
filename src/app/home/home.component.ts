import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';

import {LoginService} from '../services/login.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from 'angular5-social-login';
import {ResourceServiceService} from '../map/resources/services/resource-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [LoginService]
})
export class HomeComponent implements OnInit {
  user: SocialUser;
  public authorized: boolean = false;
  mail='';
  constructor( private ls: LoginService , private _router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService,
               private socialAuthService: AuthService,private resourveService:ResourceServiceService) { }

  ngOnInit()
  {
    this.storage.set('currentuser',"user");
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

dashbord()
 {
  this._router.navigate(['/map']);
}

  resources()
  {
    this._router.navigate(['/map/resources/listResources']);
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData.email);
        this.mail=userData.email;
        if (userData != null) {
          this.authorized = true;
          this.user = userData;
          this.resourveService.setUser(userData);
          this._router.navigate(['/resources']);
        }
      }
    );
  }
}
