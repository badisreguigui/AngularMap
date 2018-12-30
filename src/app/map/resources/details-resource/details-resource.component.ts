import {Component, OnInit, ViewChild,Input} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import {ResourceServiceService} from '../services/resource-service.service';
import {EventService} from '../services/event.service';
import {PushNotificationsService} from '../services/push-notifications.service';
import {Router} from '@angular/router';
import {AuthService} from 'angular5-social-login';
import {Options} from 'fullcalendar';
import {Resource} from '../../../../Entities/resource';
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-details-resource',
  templateUrl: './details-resource.component.html',
  styleUrls: ['./details-resource.component.css'],
  providers:[ResourceServiceService,EventService,PushNotificationsService],
})
export class DetailsResourceComponent implements OnInit {
  @Input()
  resourceChild: Resource;
  events = null;
  test : boolean =true;
  selectedResource : Resource;
  images = [{
    name: "Image 1", url:"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"
  },
    {
      name:"Image 2",
      url:"https://akm-img-a-in.tosshub.com/indiatoday/559_102017023826.jpg?TZlWXro5W8Rj4VbO.MpENgo1F2MX93j"
    }];
  constructor(private _router: Router,private resourceService: ResourceServiceService,protected eventService: EventService,
              private socialAuthService: AuthService,private _notificationService: PushNotificationsService) {
    this._notificationService.requestPermission();
  }

  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {
    console.log(this.resourceChild.lastname);
    this.selectedResource=this.resourceChild;
    console.log(this.selectedResource.firstname);
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

    this.eventService.getEvents(this.resourceChild.id).subscribe(data => {
      this.events = data;
      console.log(data);
      console.log(this.events);

    });
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

  counter(i: number) {
    return new Array(i);
  }
  gotoIndex(){
    this.test=false;
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  download(){
    let doc = new jsPDF();
    for(var i=0;i<this.images.length;i++){
      let imageData= this.getBase64Image(document.getElementById('img'+i));
      console.log(imageData);
      doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
      doc.text('Badis',15,15);
      doc.addPage();
    }
    doc.save('Test.pdf');
  }

  public captureScreen()
  {
    var data = document.getElementById('contentpdf');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 150;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 25;
      pdf.text(40, 15, 'Thank you for joining Levio"s Team ');
      pdf.addImage(contentDataURL, 'PNG', 25, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF

    });
  }

}
