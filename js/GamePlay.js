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
    name: "dirt",
  },
  {
    style: "background-image:url(./../Textures/Grass_Block.jpg)",
    tool: "shovel",
    name: "grass",
  },
  {
    style: "background-image:url(./../Textures/wood.jpg)",
    tool: "axe",
    name: "wood",
  },
  {
    style: "background-image:url(./../Textures/Grave.jpg)",
    tool: "dirtAxe",
    name: "grave",
  },
  {
    style: "background-image:url(./../Textures/carrots.jpg)",
    tool: "dirtAxe",
    name: "carrots",
  },
];
const grid = document.getElementById("grid");
defaultMap.forEach((e) => {
  e.forEach((e1) => {
    grid.innerHTML += `<div name="${colors[e1].tool}" onmousedown="removeCell(event)" class="cells" style="${colors[e1].style}; width: 100%; height: 100%"></div>`;
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
  Array.from(inventory.children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  selectedItem = { name: e, type: "tool" };

  Array.from(toolsDiv.children.item(0).children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  Array.from(event.target.parentElement.children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  event.target.style.boxShadow = `0 0 20px #143b91`;
};
const removeCell = (event) => {
  if (selectedItem?.type == "tool") {
    console.log(event.target);
    if (event.target.getAttribute("name") === selectedItem.name) {
      event.target.style.backgroundImage = "";
    }
  } else if (selectedItem?.type == "block") {
    if (event.target.style.backgroundImage === "") {
      event.target.style = selectedItem.style;
      event.target.setAttribute("name", selectedItem.tool);
    }
  }
};
const inventory = document.getElementById("inventory");
colors.forEach((e) => {
  if (e.tool)
    inventory.innerHTML += `<div onclick="selectInventory(event,'${e.style}','${
      e.name
    }','${e.tool}')" class="inventoryTool" style="${
      e.style
    }"><p style="color:white;font-size:1vw;pointer-events: none;">${10}</p></div>`;
});
const selectInventory = (e, style, name, tool) => {
  selectedItem = { name, type: "block", style, tool };
  Array.from(e.target.parentElement.children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  Array.from(toolsDiv.children.item(0).children).forEach((e) => {
    e.style.boxShadow = ``;
  });
  e.target.style.boxShadow = `0 0 20px #143b91`;
};
