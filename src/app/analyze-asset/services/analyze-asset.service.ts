import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Analyze } from '../models/analyze';
import { environment } from '../../../environments/environment';

@Injectable()
export class AnalyzeAssetService {

  constructor(private http: HttpClient) {
  }

  analyze(): Observable<Analyze> {
    const url = `${environment.api}/analyzes`;
    console.log(url);
    return this.http.get<Analyze>(url);
  }

}
