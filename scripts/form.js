const productSelect = document.querySelector("#product");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function createProductList() {
    products.forEach(p => {
        optElement = document.createElement("option");
        optElement.setAttribute("value", p.id);
        optElement.innerText = p.name

        productSelect?.appendChild(optElement);
    });
  }

  createProductList();

let counter = localStorage.getItem("tally") || 1;
const counterDisplay = document.querySelector("#reviews");



function tallyReviews() {
  counter = localStorage.getItem("tally");
  counter = Number(counter) + 1;
  localStorage.setItem("tally", counter);
  counterDisplay.innerText = counter;
}