import { onCreateTask } from "./addTask.js";
import { onToggleTask } from "./renderList.js";

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector(".create-task-btn");
  createBtn.addEventListener("click", onCreateTask);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onToggleTask);
};