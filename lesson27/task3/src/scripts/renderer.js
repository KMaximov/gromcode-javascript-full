import { getItem } from "./storage.js";

const listElem = document.querySelector(".list");
export const renderTasks = () => {
  const tasks = getItem("tasksList") || [];
  listElem.innerHTML = '';
  const tasksElems = tasks
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.setAttribute("data-id", `${id}`);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", `${id}`);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};