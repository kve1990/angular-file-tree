import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INode } from './INode';

const DataUrl = 'https://kve1990.github.io/angular-file-tree/dist/browser/assets/files/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<INode[]> {
    return this.http.get<INode[]>(DataUrl).pipe(
      map(data => data['tree'])
    );
  }
}
