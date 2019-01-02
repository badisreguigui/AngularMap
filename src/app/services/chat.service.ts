import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpUtils} from 'webdriver-manager/built/lib/http_utils';
import {htmlEncode} from 'js-htmlencode';

@Injectable()
export class ChatService {


  constructor(private http: HttpClient) { }

  DisplayDiscuss(idConnected)
  {
    return this.http.get('http://localhost:44435/Projet/DisplayDiscuss?idUser=' + idConnected);

  }

  getRessourceInfos(idRessource)
{
  return this.http.get('  http://localhost:44435/Projet/getRessourceInfos?idRessource=' +  idRessource);

}


DisplayMessages(idDiss, myId)
{
  return this.http.get('  http://localhost:44435/Projet/DisplayMessages?idDiss=' + idDiss + '&myId=' + myId);
}

  AddMessage(body, idSender, idDiscussion)
  {
    //  console.log("BODY ====>"+htmlEncode(body));

   return this.http.get('  http://localhost:44435/Projet/AddMsessage?body=' +  body + '&idSender=' + idSender + '&idDiscussion=' + idDiscussion);

  }

  AddImage(body, idSender, idDiscussion)
  {
         console.log("BODY ====>"+body);

    return this.http.get('  http://localhost:44435/Projet/AddImage?imgPath='+body+'&idSender=' + idSender + '&idDiscussion=' + idDiscussion);

  }

}
