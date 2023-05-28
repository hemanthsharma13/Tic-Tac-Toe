"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsService = void 0;
const common_1 = require("@nestjs/common");
const tree_dto_1 = require("./dto/tree.dto");
let AnimalsService = class AnimalsService {
    constructor() { }
    find() {
        return [tree_dto_1.treeNode];
    }
    add(body) {
        const { id, label } = body;
        return this.addLabelToObjectById(tree_dto_1.treeNode, id, label);
    }
    addLabelToObjectById(obj, id, labelToAdd) {
        if (obj.hasOwnProperty(id)) {
            obj[id].children.push({
                [String(Object.keys(obj[id].children).length + 1)]: {
                    label: labelToAdd,
                    children: [],
                },
            });
        }
        else {
            for (const key in obj) {
                if (obj[key].children && obj[key].children.length > 0) {
                    obj[key].children.forEach((child) => {
                        this.addLabelToObjectById(child, id, labelToAdd);
                    });
                }
                else {
                    if (typeof obj[key] === 'object') {
                        this.addLabelToObjectById(obj[key], id, labelToAdd);
                    }
                }
            }
        }
        return obj;
    }
};
AnimalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AnimalsService);
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=animals.service.js.map