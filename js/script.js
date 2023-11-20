// document.addEventListener('DOMContentLoaded', function () {
//     const submitForm = document.getElementById('form');
//     submitForm.addEventListener('submit', function (event) {
//       event.preventDefault();
//       addTodo();
//     });
//   });


// //   document.addEventListener('DOMContentLoaded', function () {});

//   function addTodo() {
//     const textTodo = document.getElementById('title').value;
//     const timestamp = document.getElementById('date').value;
   
//     const generatedID = generateId();
//     const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
//     todos.push(todoObject);
   
//     document.dispatchEvent(new Event(RENDER_EVENT));
//   }

// //   generateTodoObject(generatedID, textTodo, timestamp, false);

//   function generateId() {
//     return +new Date();
//   }
   
//   function generateTodoObject(id, task, timestamp, isCompleted) {
//     return {
//       id,
//       task,
//       timestamp,
//       isCompleted
//     }
//   }

//   const todos = [];
//   const RENDER_EVENT = 'render-todo';

//   document.addEventListener(RENDER_EVENT, function () {
//     const uncompletedTODOList = document.getElementById('todos');
//     uncompletedTODOList.innerHTML = '';
   
//     const completedTODOList = document.getElementById('completed-todos');
//     completedTODOList.innerHTML = '';
   
//     for (const todoItem of todos) {
//       const todoElement = makeTodo(todoItem);
//       if (!todoItem.isCompleted)
//         uncompletedTODOList.append(todoElement);
//       else
//         completedTODOList.append(todoElement);
//     }
//   });


//   function makeTodo(todoObject) {
//     const textTitle = document.createElement('h2');
//     textTitle.innerText = todoObject.task;
   
//     const textTimestamp = document.createElement('p');
//     textTimestamp.innerText = todoObject.timestamp;
   
//     const textContainer = document.createElement('div');
//     textContainer.classList.add('inner');
//     textContainer.append(textTitle, textTimestamp);
   
//     const container = document.createElement('div');
//     container.classList.add('item', 'shadow');
//     container.append(textContainer);
//     container.setAttribute('id', `todo-${todoObject.id}`);
   
      
//   if (todoObject.isCompleted) {
//     const undoButton = document.createElement('button');
//     undoButton.classList.add('undo-button');
 
//     undoButton.addEventListener('click', function () {
//       undoTaskFromCompleted(todoObject.id);
//     });
 
//     const trashButton = document.createElement('button');
//     trashButton.classList.add('trash-button');
 
//     trashButton.addEventListener('click', function () {
//       removeTaskFromCompleted(todoObject.id);
//     });
 
//     container.append(undoButton, trashButton);
//   } else {
//     const checkButton = document.createElement('button');
//     checkButton.classList.add('check-button');
    
//     checkButton.addEventListener('click', function () {
//       addTaskToCompleted(todoObject.id);
//     });
    
//     container.append(checkButton);
//   }

//     return container;
//   }


//   document.addEventListener(RENDER_EVENT, function () {
//     // console.log(todos);
//     const uncompletedTODOList = document.getElementById('todos');
//     uncompletedTODOList.innerHTML = '';
   
//     for (const todoItem of todos) {
//       const todoElement = makeTodo(todoItem);
//       uncompletedTODOList.append(todoElement);
//     }
//   });

// //   Function add task Complete
// function addTaskToCompleted (todoId) {
//     const todoTarget = findTodo(todoId);
   
//     if (todoTarget == null) return;
   
//     todoTarget.isCompleted = true;
//     document.dispatchEvent(new Event(RENDER_EVENT));
//   }

// //   Cari todo
// function findTodo(todoId) {
//     for (const todoItem of todos) {
//       if (todoItem.id === todoId) {
//         return todoItem;
//       }
//     }
//     return null;
//   }

// function findTodoIndex(todoId) {
// for (const index in todos) {
//     if (todos[index].id === todoId) {
//     return index;
//     }
// }

// return -1;
// }  

// // fungsi remove dan undo
// function removeTaskFromCompleted(todoId) {
//     const todoTarget = findTodoIndex(todoId);
   
//     if (todoTarget === -1) return;
   
//     todos.splice(todoTarget, 1);
//     document.dispatchEvent(new Event(RENDER_EVENT));
//   }
   
   
//   function undoTaskFromCompleted(todoId) {
//     const todoTarget = findTodo(todoId);
   
//     if (todoTarget == null) return;
   
//     todoTarget.isCompleted = false;
//     document.dispatchEvent(new Event(RENDER_EVENT));
//   }  



/**
 * [
 *    {
 *      id: <int>
 *      task: <string>
 *      timestamp: <string>
 *      isCompleted: <boolean>
 *    }
 * ]
 */


//  no web storage
// const todos = [];
// const RENDER_EVENT = 'render-todo';

// function generateId() {
//   return +new Date();
// }

// function generateTodoObject(id, task, timestamp, isCompleted) {
//   return {
//     id,
//     task,
//     timestamp,
//     isCompleted
//   }
// }

// function findTodo(todoId) {
//   for (todoItem of todos) {
//     if (todoItem.id === todoId) {
//       return todoItem;
//     }
//   }
//   return null;
// }

// function findTodoIndex(todoId) {
//   for (index in todos) {
//     if (todos[index].id === todoId) {
//       return index;
//     }
//   }
//   return -1;
// }

// function makeTodo(todoObject) {
//   const {id, task, timestamp, isCompleted} = todoObject;

//   const textTitle = document.createElement('h2');
//   textTitle.innerText = task;

//   const textTimestamp = document.createElement('p');
//   textTimestamp.innerText = timestamp;

//   const textContainer = document.createElement('div');
//   textContainer.classList.add('inner');
//   textContainer.append(textTitle, textTimestamp);

//   const container = document.createElement('div');
//   container.classList.add('item', 'shadow');
//   container.append(textContainer);
//   container.setAttribute('id', `todo-${id}`);

//   if (isCompleted) {
//     const undoButton = document.createElement('button');
//     undoButton.classList.add('undo-button');
//     undoButton.addEventListener('click', function () {
//       undoTaskFromCompleted(id);
//     });

//     const trashButton = document.createElement('button');
//     trashButton.classList.add('trash-button');
//     trashButton.addEventListener('click', function () {
//       removeTaskFromCompleted(id);
//     });

//     container.append(undoButton, trashButton);

//   } else {
//     const checkButton = document.createElement('button');
//     checkButton.classList.add('check-button');
//     checkButton.addEventListener('click', function () {
//       addTaskToCompleted(id);
//     });

//     container.append(checkButton);
//   }

//   return container;
// }

// function addTodo() {
//   const textTodo = document.getElementById('title').value;
//   const timestamp = document.getElementById('date').value;

//   const generatedID = generateId();
//   const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
//   todos.push(todoObject);

//   document.dispatchEvent(new Event(RENDER_EVENT));
// }

// function addTaskToCompleted(todoId /* HTMLELement */) {
//   const todoTarget = findTodo(todoId);
//   if (todoTarget == null) return;

//   todoTarget.isCompleted = true;
//   document.dispatchEvent(new Event(RENDER_EVENT));
// }

// function removeTaskFromCompleted(todoId /* HTMLELement */) {
//   const todoTarget = findTodoIndex(todoId);
//   if (todoTarget === -1) return;
//   todos.splice(todoTarget, 1);

//   document.dispatchEvent(new Event(RENDER_EVENT));
// }

// function undoTaskFromCompleted(todoId /* HTMLELement */) {
//   const todoTarget = findTodo(todoId);
//   if (todoTarget == null) return;

//   todoTarget.isCompleted = false;
//   document.dispatchEvent(new Event(RENDER_EVENT));
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const submitForm /* HTMLFormElement */ = document.getElementById('form');

//   submitForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     addTodo();
//   });
// });


// document.addEventListener(RENDER_EVENT, function () {
//   const uncompletedTODOList = document.getElementById('todos');
//   const listCompleted = document.getElementById('completed-todos');

//   // clearing list item
//   uncompletedTODOList.innerHTML = '';
//   listCompleted.innerHTML = '';

//   for (todoItem of todos) {
//     const todoElement = makeTodo(todoItem);
//     if (todoItem.isCompleted) {
//       listCompleted.append(todoElement);
//     } else {
//       uncompletedTODOList.append(todoElement);
//     }
//   }
// });


// Web storage
/**
 * [
 *    {
 *      id: <int>
 *      task: <string>
 *      timestamp: <string>
 *      isCompleted: <boolean>
 *    }
 * 
 *    {
        id: string | number,
        title: string,
        author: string,
        year: number,
        isComplete: boolean,
      }
 * ]
 */
const todos = [];
const RENDER_EVENT = 'render-todo';
const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';

function generateId() {
  return +new Date();
}

function generateTodoObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted
  }
}

function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}


/**
 * Fungsi ini digunakan untuk memeriksa apakah localStorage didukung oleh browser atau tidak
 *
 * @returns boolean
 */
function isStorageExist() /* boolean */ {
  if (typeof (Storage) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

/**
 * Fungsi ini digunakan untuk menyimpan data ke localStorage
 * berdasarkan KEY yang sudah ditetapkan sebelumnya.
 */
function saveData() {
  if (isStorageExist()) {
    const parsed /* string */ = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

/**
 * Fungsi ini digunakan untuk memuat data dari localStorage
 * Dan memasukkan data hasil parsing ke variabel {@see todos}
 */
function loadDataFromStorage() {
  const serializedData /* string */ = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const todo of data) {
      todos.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}


function makeTodo(todoObject) {
  const {id, title, author, year, isCompleted} = todoObject;

  // Title
  const textTitle = document.createElement('h2');
  textTitle.innerText = title;

  // Author
  const textAuthor = document.createElement('p');
  textAuthor.innerText = author;

  // Year
  const textYear = document.createElement('p');
  textYear.innerText = year;

  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textAuthor, textYear);

  const container = document.createElement('div');
  container.classList.add('item', 'shadow')
  container.append(textContainer);
  container.setAttribute('id', `todo-${id}`);

  if (isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');
    undoButton.addEventListener('click', function () {
      undoTaskFromCompleted(id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(id);
    });

    container.append(undoButton, trashButton);
  } else {

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(id);
    });

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.addEventListener('click', function () {
      addTaskToCompleted(id);
    });

    container.append(checkButton, trashButton);
  }

  return container;
}

function addTodo() {
  const textTodo = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  // const year = document.getElementById('year').value;
  const year = parseInt(document.getElementById('year').value, 10);

  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textTodo, author, year, false);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addTaskToCompleted(todoId /* HTMLELement */) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeTaskFromCompleted(todoId /* HTMLELement */) {
  const todoTarget = findTodoIndex(todoId);

  if (todoTarget === -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  console.log('hapuss');
  saveData();
}

function undoTaskFromCompleted(todoId /* HTMLELement */) {

  const todoTarget = findTodo(todoId);
  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

document.addEventListener('DOMContentLoaded', function () {

  const submitForm /* HTMLFormElement */ = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(SAVED_EVENT, () => {
  console.log('Data berhasil di simpan.');
});

document.addEventListener(RENDER_EVENT, function () {
  const uncompletedTODOList = document.getElementById('todos');
  const listCompleted = document.getElementById('completed-todos');

  // clearing list item
  uncompletedTODOList.innerHTML = '';
  listCompleted.innerHTML = '';

  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);
    if (todoItem.isCompleted) {
      listCompleted.append(todoElement);
    } else {
      uncompletedTODOList.append(todoElement);
    }
  }
})