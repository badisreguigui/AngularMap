import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class MandateService {

  constructor(private http:HttpClient){}
  urlAllMandates='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/ListeMandats';
  urlAllResourceRequests='http://127.0.0.1:18080/InfinityMAP-web/rest/ResourceRequestService/getResourceRequest';
  urlResources='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/searchResource';
  urlLongitude='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/Longitude?Ip=';
  urlLatitude='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/Latitude?Ip=';
  urlAffecterMandate='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/affecterResourceMandat2';
  urlHistoriques='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/ListeHistoriques';
  urlUpdate='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/UpdateMandat/';
  urlFacture='http://127.0.0.1:18080/InfinityMAP-web/rest/mandate/calculFacture?mandateId=';

  getMandates():Observable<Object>{
    return this.http.get(this.urlAllMandates);
  }
  getResourceRequests():Observable<Object>{
    return this.http.get(this.urlAllResourceRequests);
  }

  getResources(profil,years):Observable<Object>{
    return this.http.get(this.urlResources+"/"+profil+"/"+years);
  }
  getLongitude(ip):Observable<Object>{
    return this.http.get(this.urlLongitude+ip);
  }
  getLatitude(ip):Observable<Object>{
    return this.http.get(this.urlLatitude+ip);
  }
  affecterResourceMandat(request,resource):Observable<Object>{
    return this.http.get(this.urlAffecterMandate+"/"+request+"/"+resource);
  }
  getHistoriques():Observable<Object>{
    return this.http.get(this.urlHistoriques);
  }
 UpdateMandate(m,id):Observable<Object>{
  const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
    return this.http.put(this.urlUpdate+id,m,{ headers: headers })
  }
  getFacture(i):Observable<Object>{
    return this.http.get(this.urlFacture+i);
  }

}
