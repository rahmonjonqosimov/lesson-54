const todoList = document.getElementById("todo-list");
const btnAdd = document.querySelector(".btn-add");
const todo = document.querySelector(".todo-list-content");
const form = document.querySelector(".form");
const btn = document.querySelector("input-checked");
const maxsulotSoni = document.querySelector(".count");
let count = 0;
let DATA = [];

class Prodact {
  constructor(name) {
    this.id = `id-${new Date().getTime()}`;
    this.name = name;
    this.time = ` ${new Date().getFullYear()}.${
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1
    }.${
      new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate()
    }  ----
      ${
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours()
      } : ${
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()
    }`;
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newObj = new Prodact(todoList.value);
  DATA.push(newObj);
  createTodoList(DATA);
  console.log(DATA);
  todoList.value = "";
  count++;
  maxsulotSoni.innerHTML = count;
});
function createTodoList(data) {
  while (todo.firstChild) {
    todo.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((el, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="check1" >
    <input type="checkbox" class="input-checked" id="${el.id}" />
    <label title="${el.name}" class="check"  for="${el.id}">${el.name}</label>
    </div>
    <div class="clock">
    <h4> ${el.time}</h4>
    <button class="btn" onclic="dec()" onclick="deleteTodoList(${i}), dec()" > <img src="./images/bx-x.svg" alt="bx-x"></button>
    </div>
    `;
    let hr = document.createElement("hr");
    hr.classList.add("hr");
    li.classList.add("show");
    fragment.append(li);
    fragment.append(hr);
  });
  todo.append(fragment);
}
createTodoList(DATA);
function deleteTodoList(index) {
  DATA.splice(index, 1);
  createTodoList(DATA);
}

todo.addEventListener("change", (event) => {
  let labelVale = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  );
  let check = event.target;
  if (check.checked) {
    labelVale.style.textDecoration = "line-through";
    labelVale.style.color = "#1266F1";
  } else {
    labelVale.style.textDecoration = "none";
    labelVale.style.color = "black";
  }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", (event) => {
  while (todo.firstChild) {
    todo.firstChild.remove();
  }
  function clearProdacts(data) {
    {
      DATA = [];
    }
  }
  clearProdacts(DATA);
  todoList.value = "";
});

form.addEventListener("submit", () => {});
clear.addEventListener("click", () => {
  count = 0;
  maxsulotSoni.innerHTML = count;
});
function dec() {
  if (count > 0) {
    count--;
    maxsulotSoni.innerHTML = count;
  }
}

const soat = document.querySelector(".soat");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");
setInterval(() => {
  let hozirgiVaqt = new Date();
  soat.innerHTML =
    hozirgiVaqt.getHours() < 10
      ? "0" + hozirgiVaqt.getHours()
      : hozirgiVaqt.getHours();
  minut.innerHTML =
    hozirgiVaqt.getMinutes() < 10
      ? "0" + hozirgiVaqt.getMinutes()
      : hozirgiVaqt.getMinutes();
  second.innerHTML =
    hozirgiVaqt.getSeconds() < 10
      ? "0" + hozirgiVaqt.getSeconds()
      : hozirgiVaqt.getSeconds();
}, Number.POSITIVE_INFINITY);
