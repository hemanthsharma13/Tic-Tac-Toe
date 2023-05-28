import { AnimalsService } from './animals.service';
import { AddNodeDTO } from './dto/create-tree.dto';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    create(addNode: AddNodeDTO): any;
    findAll(): import("./dto/tree.dto").RootNode[];
}
