import {Component} from '@angular/core';
import {INode} from './INode';
import data from '../assets/files/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  public listItems: INode[] = data.tree || [];

  constructor() {
  }
}
