const todoList = document.getElementById("todo-list");
const btnAdd = document.querySelector(".btn-add");
const todo = document.querySelector(".todo-list-content");
const form = document.querySelector(".form");
const btn = document.querySelector("input-checked");
let DATA = [];

class Prodact {
  constructor(name, valid) {
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
});
function createTodoList(data) {
  while (todo.firstChild) {
    todo.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((el, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <label class="check" for="${el.id}"> 
    <input type="checkbox" class="input-checked" id="${el.id}" /> 
    ${el.name}
    </label>
    <div class="clock">
    <h4> ${el.time}</h4>
    <button class="btn" onclick="deleteTodoList(${i}), dec()" > <img src="./images/bx-x.svg" alt="bx-x"></button>
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
  } else {
    labelVale.style.textDecoration = "none";
  }
});
