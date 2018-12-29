import { Component, OnInit, ViewChild } from '@angular/core';
import {Resource} from '../../../../Entities/resource';
import {Skill} from '../../../../Entities/skill';
import {ResourceServiceService} from '../services/resource-service.service';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
import {EventService} from '../services/event.service';
import {AuthService, FacebookLoginProvider, SocialUser} from 'angular5-social-login';
import {Router} from '@angular/router';
import {PushNotificationsService} from '../services/push-notifications.service';

@Component({
  selector: 'app-resourcecomponent',
  templateUrl: './resourcecomponent.component.html',
  styleUrls: ['./resourcecomponent.component.css'],
  providers:[ResourceServiceService,EventService,PushNotificationsService]
})


export class ResourcecomponentComponent implements OnInit {
  user: SocialUser;
  public authorized: boolean = false;
  events = null;
  name = 'Angular 5';
  mail='';
  email = '';
  password = '';
  loggedin: boolean = false;
  cur: any;
  checkedphp:boolean;
  checkedhtml:boolean;
  checkedmysql:boolean;
  isEdit:boolean=false;
  selectedResource:Resource;
  resource: Resource;
  skill: Skill;
  selectedimage:string;
  listResources: any;
  constructor(private _router: Router,private resourceService: ResourceServiceService,protected eventService: EventService,
              private socialAuthService: AuthService,private _notificationService: PushNotificationsService) {
    this._notificationService.requestPermission();
  }

  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  ngOnInit() {

    this.user=this.resourceService.getUser();
    this.resourceService.getAllResources().subscribe(data => { this.listResources = data; });

    this.calendarOptions = {
      editable: true,
      contentHeight:400,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };

    this.eventService.getEvents().subscribe(data => {
      this.events = data;
      console.log(data);
      console.log(this.events);

    });
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) {
      this.selectedimage=event.target.files[0].name;
      console.log(event.target.files[0].name);
    }
  }

  add(lastname,firstname,picture,seniority,sector,profil,contractype,region) {
    this.resource.lastname=lastname;
    this.resource.firstname=firstname;
    this.resource.picture=picture;
    this.resource.seniority=seniority;
    this.resource.sector=sector;
    this.resource.profil=profil;
    this.resource.contractype=contractype;
    this.resource.region=region;
    this.resource.state='Available';
    this.resourceService.addResource(this.resource).subscribe(
      res=> {
        console.log(res);
        this.listResources.unshift(this.resource);
        this.resourceService.getAllResources().subscribe(data => { this.listResources = data; });
      });
    console.log(this.resource);
  }

  details(l,id) {
    this.selectedResource = l;
    this.selectedResource.id=id;
    console.log(this.selectedResource);
  }
  update(l) {
    this.selectedResource = l;
    this.resourceService.updateResource(this.selectedResource).subscribe(
      res=> {
        console.log(res);
        for(let i=0;i<this.listResources.length;i++) {
          if(this.listResources[i].id===this.selectedResource.id) {
            this.listResources.splice(i,1);
          }
        }
        this.listResources.unshift(this.selectedResource);
        this.resourceService.getAllResources().subscribe(data => { this.listResources = data; });

      });
    console.log(this.resource);
  }


  deleteResource(idResource,resource) {
    console.log(idResource);
    this.resourceService.deleteResource(idResource,resource).subscribe(c => {
      for(let i=0;i<this.listResources.length;i++) {
        if(this.listResources[i].id===this.resource.id) {
          this.listResources.splice(this.listResources.indexOf(resource),1);
        }
      }
      this.listResources.unshift(c);
      this.resourceService.getAllResources().subscribe(data => { this.listResources = data; });
    });
  }


  addSkill(skillvalue,skillrate) {
    if(this.checkedphp===true) {
      this.skill = {
        value: 'php',
        skillRate: skillrate,
      };
      this.resourceService.AffectSkill(this.selectedResource.id,this.skill).subscribe(
        res=> {
          console.log(res);

        });
    }
    if(this.checkedhtml===true) {
      this.skill = {
        value: 'Html',
        skillRate: skillrate,
      };
      this.resourceService.AffectSkill(this.selectedResource.id,this.skill).subscribe(
        res=> {
          console.log(res);

        });
    }
    if(this.checkedmysql===true) {
      this.skill = {
        value: 'MySql',
        skillRate: skillrate,
      };
      this.resourceService.AffectSkill(this.selectedResource.id,this.skill).subscribe(
        res=> {
          console.log(res);

        });
    }
    console.log(this.selectedResource.id);

    console.log(this.skill);
    console.log(this.checkedphp);
    console.log(this.checkedhtml);
    console.log(this.checkedmysql);

  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.subject,
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.subject,
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;

  }

  public signOut(socialPlatform: string) {
    this.socialAuthService.signOut();
    this.mail='';
    this.authorized = false;
    this.resourceService.setUser(null);
    this._router.navigate(['/home']);
  }

  notify() {
    let data: Array < any >= [];
    data.push({
      'title': 'Approval',
      'alertContent': 'This is First Alert -- By Debasis Saha'
    });
    data.push({
      'title': 'Request',
      'alertContent': 'This is Second Alert -- By Debasis Saha'
    });
    data.push({
      'title': 'Leave Application',
      'alertContent': 'This is Third Alert -- By Debasis Saha'
    });
    data.push({
      'title': 'Approval',
      'alertContent': 'This is Fourth Alert -- By Debasis Saha'
    });
    data.push({
      'title': 'To Do Task',
      'alertContent': 'This is Fifth Alert -- By Debasis Saha'
    });
    this._notificationService.generateNotification(data);
  }

}
