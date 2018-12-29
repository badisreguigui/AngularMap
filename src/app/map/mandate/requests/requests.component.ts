import { Component, OnInit } from '@angular/core';
import { MandateService } from '../mandate.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  providers:[MandateService]
})
export class RequestsComponent implements OnInit {
  listMandates:Object;
  listResourceRequest:Object;

  constructor(private ds:MandateService) { 

  
  
   
  }
  ngOnInit() {
    this.ds.getMandates().subscribe(
      data=>{
        this.listMandates=data;
        console.log(data);
      }
    )  
    this.ds.getResourceRequests().subscribe(
      data=>{
        this.listResourceRequest=data;
        console.log(data);
      })
  }






}
