import {Component, Inject, OnInit} from '@angular/core';
import { ResourceRequestService } from '../../services/resource-request.service';
import {ChatService} from '../../services/chat.service';
import {SpeechService} from 'ngx-speech';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-resource-request',
  templateUrl: './resource-request.component.html',
  styleUrls: ['./resource-request.component.css'],
  providers : [ResourceRequestService]
})
export class ResourceRequestComponent implements OnInit {

  resourceRequestList: Object;
  myProjectList: Object;
   myId: number;
  constructor(private rrs: ResourceRequestService,@Inject(LOCAL_STORAGE) private storage: WebStorageService, public ngmartModal:NgxSmartModalService) { }

  ngOnInit()
  {
     this.myId = this.storage.get('idconnected');
    this.rrs.MyResourceRequests().subscribe(data =>
    {
   this.resourceRequestList = data;
    });
    this.rrs.MyProject(this.myId).subscribe(data =>
    {
      this.myProjectList = data;
     // console.log("MY PROJECT"+data[1].nom);
    });
  }


  newResourceRequest(searchedProfile,requirements,yearsOfExperience,projetId )
  {
    console.log("project Id =>"+projetId.value);
    console.log("searched profile =>"+searchedProfile.value);
    console.log("requirements=>"+requirements.value);
    console.log("yearsOfExperience =>"+yearsOfExperience.value);
   this.rrs.sendResourceRequest(searchedProfile,requirements,yearsOfExperience,projetId,this.storage.get('idconnected')).subscribe(res => {
   }, err => {
     console.log("CHECK YOUR SERVICE");
   });
  }

  checkvalue(projetName)
  {
    console.log("LE NOM DU PROJECT SELECTIONNE ===> "+projetName);
  }

}
