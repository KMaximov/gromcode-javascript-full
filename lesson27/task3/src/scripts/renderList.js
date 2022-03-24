import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";

export const onToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  const tasks = getItem("tasksList");
  const result = tasks.find(({ id }) => String(id) === event.target.dataset.id);
  result.done = event.target.checked;
  setItem("tasksList", tasks);

  renderTasks();
};