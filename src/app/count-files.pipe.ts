import { Pipe, PipeTransform } from '@angular/core';
import { INode } from './INode';

@Pipe({
  name: 'countFiles'
})
export class CountFilesPipe implements PipeTransform {

  transform(items: INode[]): number {
    return items.reduce((count, item) => {
      if (item.type === 'file') {
        return ++count;
      }
      if (item.type === 'folder' && item.children && item.children.length) {
        return count + this.transform(item.children);
      }
      return count;
    }, 0);
  }

}
