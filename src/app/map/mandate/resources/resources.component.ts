import { Component, OnInit } from '@angular/core';
import { MandateService } from '../mandate.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers:[MandateService]
})
export class ResourcesComponent implements OnInit {

  profil:string;
  years:number;
  start:Date;
  end:Date;
  listResources:Object;
  listMandates:Object;

  id1:number;
  

  

  constructor(private ds:MandateService,private route: ActivatedRoute) {

    this.route.params.subscribe( params => {console.log(params.profil) 
    this.profil=params.profil;
  this.years=params.years;
this.start=params.start;
this.end=params.end;
this.id1=params.id;}
  );
}
AffecterMandat(id){
  this.ds.affecterResourceMandat(this.id1,id).subscribe(
    data=>{
      this. listMandates=data;
      console.log(data);
    });
}
ngOnInit(){
 
  this.ds.getResources(this.profil,this.years).subscribe(
    data=>{
      this. listResources=data;
      console.log(data);
    }
  ) 
 


}



VerifyDisponibility(date1:Date,date2:Date) {
return (date1>(this.end) || date2<this.start);

}
}
