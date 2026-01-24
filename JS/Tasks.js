// Object task, with id, name, description and a boolean for the coompleation
const task = {
    idTask: 1,
    taskName: 'Task 1',
    taskDescription: 'Description of the task 1',
    coompletion: false
}

// Empty list to add tasks
let tasks = []

const formEvent = document.getElementById("addForm");

// Add function
formEvent.addEventListener("submit", function (addTask) {

    addTask.preventDefault();

    console.log("estoy dentro")

    const name = document.getElementById("taskName").value;
    const description = document.getElementById("description").value;

    // add to array
    tasks.push(name, description)

    console.log(tasks)

    return tasks

})