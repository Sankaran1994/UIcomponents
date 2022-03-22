"use strict";
const container = document.querySelector(".container");
console.log(container);
let html = "<ul>";

const drawchessBoard = function () {
  for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
      html += `<li class="row_${i}_col_${j}"></li>`;
    }
    html += `</ul><ul>`;
  }
  html += `</ul>`;
  container.innerHTML = html;
};
drawchessBoard();
