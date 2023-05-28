import { RootNode } from './dto/tree.dto';
export declare class AnimalsService {
    constructor();
    find(): RootNode[];
    add(body: any): any;
    addLabelToObjectById(obj: any, id: any, labelToAdd: any): any;
}
