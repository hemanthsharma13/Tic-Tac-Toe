"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeNode = exports.RootNode = exports.NodeDTO = void 0;
class NodeDTO {
}
exports.NodeDTO = NodeDTO;
class RootNode {
}
exports.RootNode = RootNode;
exports.treeNode = {
    '1': {
        label: 'root',
        children: [
            {
                '2': {
                    label: 'ant',
                    children: [],
                },
            },
            {
                '3': {
                    label: 'bear',
                    children: [
                        {
                            '4': {
                                label: 'cat',
                                children: [],
                            },
                        },
                        {
                            '5': {
                                label: 'dog',
                                children: [
                                    {
                                        '6': {
                                            label: 'elephant',
                                            children: [],
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                '7': {
                    label: 'frog',
                    children: [],
                },
            },
        ],
    },
};
//# sourceMappingURL=tree.dto.js.map