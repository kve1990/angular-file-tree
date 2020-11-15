import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INode } from './INode';

const DataUrl = 'https://kve1990.github.io/angular-file-tree/dist/browser/assets/files/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(DataUrl);
  }
}
