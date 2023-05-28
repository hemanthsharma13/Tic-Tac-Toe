Given Tree->

1: root
2: ant
3: bear
4: cat
5: dog
6: elephant
7: frog

And the strcuture with root and children as

[
{
"<id>": {
"label": "<first item>",
"children": [
{
"<id>": {
"label": "<another item>",
"children": [] // empty children
}
},
{
"<id>": {
"label": "<another item>",
"children": [ ...<any children>... ]
}
}
]
}
}
]

The Database Schema for the tree would look something like

CREATE TABLE
`node` (
`id` int(11) NOT NULL,
`label` varchar(255) DEFAULT NULL,
`parent_id` int(11) DEFAULT NULL,
`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
KEY `parent_id` (`parent_id`),
CONSTRAINT `node_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `node` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1

id -> a unique key in the entire table which resembles the id of the node
label -> a name in the node
parent_id -> It is the id of the parent node

"Add a node":

`INSERT INTO node (label, parent_id) VALUES ('<test>', "<parent_id>");`

"Find Query while setting a limit:"

`SELECT * FROM node`

"Find Query with parent information"

`SELECT n.id, n.label, n.parent_id, n.createdAt, p.label AS parent_label FROM node n LEFT JOIN node p ON n.parent_id = p.id;`
