import { Component, OnInit } from '@angular/core';
import { MandateService } from '../mandate.service';
import { Mandate } from '../../../../Entities/Mandate';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-all-mandates',
  templateUrl: './all-mandates.component.html',
  styleUrls: ['./all-mandates.component.css'],
  providers:[MandateService]
})
export class AllMandatesComponent implements OnInit {

  listMandates1:Object;
  listMandates:Mandate[];
mandate3:Mandate=new Mandate();
  constructor(private ds:MandateService,private http:HttpClient) { }


  ngOnInit() {
    console.log("hhhh");
    this.ds.getMandates().subscribe(
      data=>{
        this. listMandates1=data;
        this.listMandates=Object.keys(data).map(e=>data[e]);
        console.log(data);
      });
  }
  SelectMandate(mandate1) {

    this.mandate3= mandate1;
    console.log(this.mandate3.mandateId);

  
  }
  UpdateMandate(){

   
    
    this.ds.UpdateMandate(this.mandate3,this.mandate3.mandateId).subscribe(
      data=>{

      });
      this.ds.getMandates().subscribe(
        data=>{

        });
  }

}
