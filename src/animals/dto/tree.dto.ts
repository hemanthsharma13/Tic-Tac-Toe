export class NodeDTO {
  label: string;
  children: RootNode[];
}

export class RootNode {
  [id: string]: NodeDTO;
}

export const treeNode: RootNode = {
  '1': {
    label: 'root',
    children: [
      {
        '2': {
          label: 'ant',
          children: [], // empty children
        },
      },
      {
        '3': {
          label: 'bear',
          children: [
            {
              '4': {
                label: 'cat',
                children: [], // empty children
              },
            },
            {
              '5': {
                label: 'dog',
                children: [
                  {
                    '6': {
                      label: 'elephant',
                      children: [], // empty children
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
          children: [], // empty children
        },
      },
    ],
  },
};
