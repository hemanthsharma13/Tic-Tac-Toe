export declare class NodeDTO {
    label: string;
    children: RootNode[];
}
export declare class RootNode {
    [id: string]: NodeDTO;
}
export declare const treeNode: RootNode;
