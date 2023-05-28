import { Injectable } from '@nestjs/common';
import { RootNode, treeNode } from './dto/tree.dto';
import { AddNodeDTO } from './dto/create-tree.dto';

@Injectable()
export class AnimalsService {
  constructor() {}
  find() {
    return [treeNode];
  }
  add(body) {
    const { id, label } = body;
    return this.addLabelToObjectById(treeNode, id, label);
  }

  addLabelToObjectById(obj, id, labelToAdd) {
    if (obj.hasOwnProperty(id)) {
      obj[id].children.push({
        [String(Object.keys(obj[id].children).length + 1)]: {
          label: labelToAdd,
          children: [],
        },
      });
    } else {
      for (const key in obj) {
        if (obj[key].children && obj[key].children.length > 0) {
          obj[key].children.forEach((child) => {
            this.addLabelToObjectById(child, id, labelToAdd);
          });
        } else {
          if (typeof obj[key] === 'object') {
            this.addLabelToObjectById(obj[key], id, labelToAdd);
          }
        }
      }
    }
    return obj;
  }
}
