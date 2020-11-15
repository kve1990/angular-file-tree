import {Component, OnDestroy, OnInit} from '@angular/core';
import {INode} from './INode';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  public listItems: INode[];
  public subs: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.subs = this.dataService.getData().subscribe(list => this.listItems = list);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
