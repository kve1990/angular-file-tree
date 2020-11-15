import { Component, Input, OnInit } from '@angular/core';
import { INode } from '../INode';
import { SortService } from '../sort.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() listItems: INode[];
  @Input() root: boolean;

  constructor(public sortService: SortService) { }

  ngOnInit(): void {
    this.listItems = this.sortService.sortItems([...this.listItems]);
  }

}
