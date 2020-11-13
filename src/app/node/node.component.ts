import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {INode} from '../INode';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements OnInit {

  @Input() listItems: INode[];
  @Input() root: boolean;

  constructor() { }

  ngOnInit(): void {
    this.listItems = this.sortItems([...this.listItems]);
  }

  sortItems(items: INode[]): INode[]{
    return items.sort((a, b) => {
      if (a.type === 'folder' && b.type === 'file') {
        return -1;
      }
      if (a.type === 'file' && b.type === 'folder') {
        return 1;
      }
      if (a.type === b.type) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name == b.name) {
          return 0;
        }
        if (a.name < b.name) {
          return -1;
        }
      }
    });
  }
}
