import { Component, OnInit } from '@angular/core';
import { MandateService } from '../mandate.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
  providers:[MandateService]
})
export class HistoriqueComponent implements OnInit {
  listHistoriques:Object;
  constructor(private ds:MandateService) { 
}
  ngOnInit() {
    this.ds.getHistoriques().subscribe(
      data=>{
        this.listHistoriques=data;
        console.log(data);
      }
    )  
  }

}
