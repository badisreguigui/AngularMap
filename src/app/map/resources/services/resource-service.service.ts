import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SocialUser} from 'angular5-social-login';
import {Resource} from '../../../../Entities/resource';
import {Skill} from '../../../../Entities/skill';

@Injectable()
export class ResourceServiceService {

  user : SocialUser;
  resource:Resource;

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

  public setResource(resource){
    this.resource=resource;
  }
  public getResource(){
    return this.resource;
  }

  public getAllSkill() {
    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/SkillsService/getSkills');

  }

  public addSkill(skill) {
    console.log(skill);
    return this.http.post('http://localhost:18080/InfinityMAP-web/rest/SkillsService/addSkill', skill);
  }

  public updateSkill(skill) {
    console.log(skill);
    return this.http.put('http://localhost:18080/InfinityMAP-web/rest/SkillsService/updateSkill/'+skill.id, skill);

  }

  public deleteSkill(idskill,skill) {

    return this.http.put('http://localhost:18080/InfinityMAP-web/rest/SkillsService/deleteSkill/'+idskill,skill);

  }

  public AffectresourceSkill(idResource,skill) {

    return this.http.post('http://localhost:18080/InfinityMAP-web/rest/SkillsService/affectSkill?id='+idResource,skill);

  }

  public deleteAffectresourceSkill(idResource,skillname,skill) {

    return this.http.delete('http://localhost:18080/InfinityMAP-web/rest/SkillsService/deleteResourceSkills/'+idResource+'/'+skillname,skill);

  }

  public getSkillbyId(idresource) {
    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/SkillsService/getskillbyResource/'+idresource);

  }

  public updateRating(idresource) {
    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/ResourceService/updateRating/'+idresource);

  }

  public getRating(idresource){
      return this.http.get('http://localhost:18080/InfinityMAP-web/rest/ResourceService/getRating/'+idresource);

  }



}
