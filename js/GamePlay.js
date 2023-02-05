const defaultMap = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 4, 5, 5, 5, 0, 0, 0, 0, 6, 6, 0,
    0, 0, 0, 0, 0,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
  ],
];

const tools = [
  { name: "axe", image: "Axes.png" },
  { name: "dirtAxe", image: "dirtAxe.png" },
  { name: "shovel", image: "Shovel.png" },
];
const colors = [
  { style: "background-color:#11111" },
  { style: "background-color:white" },
  {
    style: "background-image:url(./../Textures/Dirt_Path.jpg)",
    tool: "shovel",
  },
  {
    style: "background-image:url(./../Textures/Grass_Block.jpg)",
    tool: "shovel",
  },
  { style: "background-image:url(./../Textures/wood.jpg)", tool: "axe" },
  {
    style: "background-image:url(./../Textures/Grave.jpg)",
    tool: "dirtAxe",
  },
  {
    style: "background-image:url(./../Textures/carrots.jpg)",
    tool: "dirtAxe",
  },
];
const grid = document.getElementById("grid");
defaultMap.forEach((e) => {
  e.forEach((e1) => {
    grid.innerHTML += `<div onclick="removeCell('${colors[e1].tool}',event)" class="cells" style="${colors[e1].style}; width: 100%; height: 100%"></div>`;
  });
});
const toolsDiv = document.getElementById("tools");
tools.forEach((e) => {
  toolsDiv.children.item(
    0
  ).innerHTML += `<div onclick="selectItem('${e.name}',event)" class="toolBox" style="background-image:url(./../toolsImages/${e.image}")></div>`;
});
let mouseIsdown = false;
document.body.onselectstart = (e) => {
  e.preventDefault();
};

let selectedItem;
const selectItem = (e, event) => {
  selectedItem = e;
  Array.from(event.target.parentElement.children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  event.target.style.boxShadow = `0 0 20px #143b91`;
};
const removeCell = (e, event) => {
  if (selectedItem === e) {
    event.target.style.backgroundImage = "";
  }
};
const inventory = document.getElementById("inventory");
colors.forEach((e) => {
  if (e.tool)
    inventory.innerHTML += `<div class="inventoryTool" style="${
      e.style
    }"><p style="color:white;font-size:1vw">${10}</p></div>`;
});
