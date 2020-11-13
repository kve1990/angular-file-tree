export interface INode {
  type: type;
  name: string;
  children?: INode[];
}

type type = 'folder' | 'file';
