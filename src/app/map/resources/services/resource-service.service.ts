import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SocialUser} from 'angular5-social-login';

@Injectable()
export class ResourceServiceService {

  user : SocialUser;

  headers= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
  public getAllResources() {
    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/ResourceService/filterResources');

  }

  public addResource(resource) {
    console.log(resource);
    return this.http.post('http://localhost:18080/InfinityMAP-web/rest/ResourceService/addResource', resource);
  }

  public updateResource(resource) {
    console.log(resource);
    return this.http.put('http://localhost:18080/InfinityMAP-web/rest/ResourceService/updateResource/'+resource.id, resource);

  }

  public deleteResource(idResource,resource) {

    return this.http.put('http://localhost:18080/InfinityMAP-web/rest/ResourceService/deleteResource/'+idResource,resource);

  }

  public AffectSkill(idResource,skill) {

    return this.http.post('http://localhost:18080/InfinityMAP-web/rest/SkillsService/addSkill?id='+idResource,skill);

  }

  public setUser(user){
    this.user=user;
  }
  public getUser(){
    return this.user;
  }



}
