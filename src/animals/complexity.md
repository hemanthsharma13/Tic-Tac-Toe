Time Complexity

When the object structure is deeply nested and the specified ID is not found, the function will go through the entire object structure in a recursive manner. It uses recursion to go through the object and its children. At each level of nesting, the function goes through the keys of the object using a loop.
The time complexity can be roughly estimated as
O(n),
where 'n' represents the total number of keys in the object.

Space Complexity

Regarding space complexity, the function doesn't create any additional data structures that grow with the input size. The main factor influencing space complexity is the depth of recursion. In situations where the object structure is deeply nested, the depth of recursion can be significant.
The space complexity can be roughly estimated as
O(d),
where 'd' stands for the maximum depth of recursion.
