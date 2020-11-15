import { Injectable } from '@angular/core';
import { INode } from './INode';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  public sortItems(items: INode[]): INode[]{
    return items.sort((a, b) => {
      if (a.type === 'folder' && b.type === 'file') {
        return -1;
      }
      if (a.type === 'file' && b.type === 'folder') {
        return 1;
      }
      if (a.type === b.type) {
        return this.sortByName(a, b);
      }
    });
  }

  private sortByName(a: INode, b: INode): -1|0|1 {
    if (a.name > b.name) { return 1; }
    if (a.name == b.name) { return 0; }
    if (a.name < b.name) { return -1; }
  }
}
