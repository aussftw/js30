const addItems = document.querySelector(".add-items")
const itemsList = document.querySelector(".plates")
const checkAll = document.querySelector(".check_all")
const uncheckAll = document.querySelector(".uncheck_all")
const removeAll = document.querySelector(".remove_all")
const items = JSON.parse(localStorage.getItem("items")) || []

function addItem(e) {
  e.preventDefault()
  const text = this.querySelector("[name=item]").value
  const item = {
    text,
    done: false
  }

  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem("items", JSON.stringify(items))
  this.reset()
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
    })
    .join("")
}

function toggleDone(e) {
  if (!e.target.matches("input")) return
  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem("items", JSON.stringify(items))
  populateList(items, itemsList)
}

function removeItems() {
  localStorage.clear("items")
}

// function checkAll() {
//   const allItems = document.querySelectorAll(".li")
// }
//const checkBoxes = document.querySelectorAll("input")
//checkBoxes.foreEach(input => input.addEventListener("click", () => alert("hi")))

addItems.addEventListener("submit", addItem)
itemsList.addEventListener("click", toggleDone)
removeAll.addEventListener("click", removeItems)
checkAll.addEventListener("click", checkAll)
populateList(items, itemsList)
