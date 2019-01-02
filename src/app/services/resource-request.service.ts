import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpUtils} from 'webdriver-manager/built/lib/http_utils';

import {htmlEncode} from 'js-htmlencode';

@Injectable()
export class ResourceRequestService {


  constructor(private http: HttpClient) { }

  MyResourceRequests()
  {

    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/ResourceRequestService/getResourceRequest');

  }

  MyProject(idconnected)
  {

    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/ProjetService/findListPByIdClient/'+idconnected);

  }


  sendResourceRequest(searchedProfile,requirements,yearsOfExperience,projetId,myId)
  {
    const myObject={searchedProfile:searchedProfile,requirements:requirements,yearsOfExperience:yearsOfExperience};
    console.log(" avant post");
    return this.http.get('http://localhost:44435/ResourceRequest/addResourceRequest2?idproject='+projetId.value+'&searchedProfile='+searchedProfile.value+'&requirements='+requirements.value+'&yearsOfExperience='+yearsOfExperience.value+'&titreproject=Title1&myId='+myId);
  }
}
