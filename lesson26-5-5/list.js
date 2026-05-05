const list = [
  { id: 1, name: "前端", parentId: 0 },
  { id: 2, name: "HTML", parentId: 1 },
  { id: 3, name: "CSS", parentId: 1 },
  { id: 4, name: "JavaScript", parentId: 1 },
  { id: 5, name: "React", parentId: 4 },
  { id: 6, name: "Vue", parentId: 4 },
  { id: 7, name: "后端", parentId: 0 },
  { id: 8, name: "Node.js", parentId: 7 },
];

[
  {
    id: 1,
    name: "前端",
    parentId: 0,
    children: [
      { id: 2, name: "HTML", parentId: 1, children: [] },
      { id: 3, name: "CSS", parentId: 1, children: [] },
      {
        id: 4,
        name: "JavaScript",
        parentId: 1,
        children: [
          { id: 5, name: "React", parentId: 4, children: [] },
          { id: 6, name: "Vue", parentId: 4, children: [] },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "后端",
    parentId: 0,
    children: [{ id: 8, name: "Node.js", parentId: 7, children: [] }],
  },
];

function listFn(list) {
  const map = new Map();
  const res = [];
  list.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  list.forEach((item) => {
    const node = map.get(item.id);
    if (item.parentId === 0) {
      res.push(node);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  });
  return res;
}

console.log(listFn(list));
