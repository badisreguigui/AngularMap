import {Component, Inject, OnInit, OnChanges,OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {SpeechService} from 'ngx-speech';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[ChatService]
})
export class ChatComponent implements OnDestroy, OnInit {
//Lets initiate Record OBJ
  private record;
  //Will use this flag for detect recording
  private recording = false;
  //Url of Blob
  private url;
  private error;

  discussionachercher='';

    d:any;
    d1:any;
    obj:any;
    nbMessages:string="";
 stopRecord:boolean=true;
    discussionsList: Object;
    resourceInfo: Object;
    selected:boolean=false;
    idDiscuss = 0;
    nameDest:string="";
    discussElement:string;
    interval:var;
    filePath:string;
  badwords: string[] = ['anal', 'anus', 'arse', 'ass', 'ballsack', 'balls', 'bastard', 'bitch', 'biatch',
    'bloody', 'blowjob', 'blow job', 'boner', 'boob', 'butt', 'clitoris', 'cock', 'crap', 'cunt', 'damn', 'dick', 'dildo', 'fag',
    'fuck', 'f u c k', 'Goddamn', 'God damn', 'homo', 'jerk', 'nigger', 'nigga', 'penis', 'piss', 'poop', 'pussy', 'sex', 'shit', 's hit', 'sh1t',
    'slut', 'tit', 'vagina', 'whore'];

  @ViewChild('discussion') private myScrollContainer: ElementRef;
  constructor(private cs: ChatService ,private http: HttpClient, public speech: SpeechService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,private domSanitizer: DomSanitizer) { }

  ngOnInit()
  {

      this.cs.DisplayDiscuss(this.storage.get('idconnected')).subscribe(data => {
      this.d = data;
      this.discussionsList=data;
      console.log(this.discussionsList);
      this.storage.set('discussTab', this.d);
      //  this.speech.start();

      });



  }
  getPath()
  {


  console.log("PAAAAAAATH"+document.getElementById('pathimg').value);
    var helloWorld = document.getElementById('pathimg').value;
    var hellWrld = helloWorld.replace("C:\\fakepath\\","");
    console.log("APRES SUBSTRNG ===> "+hellWrld);


      document.getElementById('discussion').innerHTML +='<img src="assets/dashboardPage/img/'+hellWrld+'">';
    this.cs.AddImage(hellWrld,this.storage.get('idconnected'),this.idDiscuss).subscribe(res => {
    }, err => {
      console.log("CHECK YOUR SERVICE");
    });
    //document.getElementById('discussion').innerHTML +='<img src="assets/dashboardPage/img/' + this.storage.get('imgpath')+ '"style="border-radius: 10px; margin-left: 20px;"><br><span class="message-data-time" style="text-align: center;">';


  }










  sanitize(url:string){

    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {

    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    var options = {
      mimeType: "audio/mpeg",
      numberOfAudioChannels: 1
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording()
  {

    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    var msgAudio = document.getElementById('audioMsg').innerHTML;
    document.getElementById('discussion').innerHTML += msgAudio;
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);

    this.stopRecord=false;
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  filterWord()
  {
   var msgBody = document.getElementById("msgBody").value;

    for (let i = 0; i < this.badwords.length; i++) {
      if(msgBody.includes(this.badwords[i]))
      {
        var res = msgBody.replace(this.badwords[i], '****');
        document.getElementById("msgBody").value=res;

      }
    }

    //console.log(msgBody);
  }

   clickDiscussion(id, destinatorId)
    {

      this.idDiscuss = id;
      this.getRessource(destinatorId);
      clearInterval(this.interval);
      this.displayMsgs();
      this.interval = setInterval (() => { this.displayMsgs();
        console.log("time");
        }, 2000);
    }




     getRessource(idRessource)
    {

         this.cs.getRessourceInfos(idRessource).subscribe(data =>
      {
         this.storage.set('resourceInfos', data);
       // console.log("TROUVER RESSOURCE"+data.lastname);
          this.resourceInfo=data;

          this.selected=true;
        });



    }





      displayMsgs() {
       this.cs.DisplayMessages(this.idDiscuss, this.storage.get('idconnected')).subscribe(data => {
        this.storage.set('msgsTab', data);
         for (let i = 0; i < this.storage.get('msgsTab').length; i++) {

        }
      });

      document.getElementById('discussion').innerHTML = "";
      for (let i = 0; i < this.storage.get('msgsTab').length; i++)
      {

        if (this.storage.get('msgsTab')[i].senderID == this.storage.get('idconnected')) {
          var msg = document.getElementById("myMsg").innerHTML;
          if (this.storage.get('msgsTab')[i].file != null) {
            var msgToAppend;
            msgToAppend = document.getElementById("myMsgLi").innerHTML;
            msgToAppend += '<div align="center"><img src="/assets/dashboardPage/img/' + this.storage.get('msgsTab')[i].file + '"style="border-radius: 10px; margin-left: 20px;"><br><span class="message-data-time" style="text-align: center;">' + this.storage.get('msgsTab')[i].file + '</span></div>';
            msg = msgToAppend;
          }
        }
        else {
          var msg = document.getElementById("otherMsg").innerHTML;

        }

        if(this.storage.get('msgsTab')[i].msg.includes(':)'))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":)","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/smile.png">');

        }
        else if(this.storage.get('msgsTab')[i].msg.includes(':('))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":(","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/sad.png">');

        }
        else if(this.storage.get('msgsTab')[i].msg.includes(":'("))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":'(","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/cry.png">');

        }
        else if(this.storage.get('msgsTab')[i].msg.includes(':D'))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":D","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/happy.png">');

        }
        else if(this.storage.get('msgsTab')[i].msg.includes(':o'))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":o","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/wow.png">');

        }
        else if(this.storage.get('msgsTab')[i].msg.includes(':p'))
        {
          var helloWorld = this.storage.get('msgsTab')[i].msg;
          var hellWrld = helloWorld.replace(":p","");
          msg = msg.replace("replaceMsg", hellWrld+'<img src="assets/tongue.png">');

        }
        msg = msg.replace("replaceMsg", this.storage.get('msgsTab')[i].msg);
        document.getElementById('discussion').innerHTML += msg;
      }
   if (this.storage.get('msgsTab').length > 10)
      { this.selected=true;
        console.log(">10");
        this.nbMessages = "already " + this.storage.get('msgsTab').length + " messages with " +  this.storage.get('resourceInfos').lastname;
      }
      else if (this.storage.get('msgsTab').length == 0) {
        this.selected=true;
        console.log("==0");
     this.nbMessages = "you don't have any messages with " + this.storage.get('resourceInfos').lastname;
      }
      else {
        if (this.storage.get('msgsTab').length == 1) {
          this.selected=true;
          console.log("==1");
          this.nbMessages  = "only " + this.storage.get('msgsTab').length + " message with " + this.storage.get('resourceInfos').lastname;
        }
        else {
          this.selected=true;
          console.log("!=1");
          this.nbMessages  = "only " + this.storage.get('msgsTab').length + " messages with " + this.storage.get('resourceInfos').lastname;
        }
      }
        this.scrollDown();
    }

  scrollDown()
  {
    /*var objDiv = document.getElementById("discussion");
    objDiv.scrollTop = objDiv.scrollHeight + 1000;*/
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  sendMsg()
  {
    var msgBody = document.getElementById("msgBody").value;

    console.log("MESSAGE SENT ===> "+msgBody);
   this.cs.AddMessage(msgBody,this.storage.get('idconnected'),this.idDiscuss).subscribe(res => {
    }, err => {
      console.log("CHECK YOUR SERVICE");
    });
    document.getElementById("msgBody").value = "";
    var stringMsg = '<li class="clearfix" id="myMsgLi" style="opacity:0.5; list-style: none">'
      + '<div class="message-data align-right">'
      + '<span class="message-data-time">delivering...</span> &nbsp; &nbsp;'
      + '<span class="message-data-name">Me</span> <i class="fa fa-circle me"></i>'
      + '</div><div class="message other-message float-right">' + msgBody + '</div></li>';
    document.getElementById('discussion').innerHTML += stringMsg;

    this.scrollDown();
    this.displayMsgs();
  }







  }
