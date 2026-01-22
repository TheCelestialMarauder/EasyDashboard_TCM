// Object task, with id, name, description and a boolean for the coompleation
const task = {
    idTask: 1,
    taskName: 'Task 1',
    taskDescription: 'Description of the task 1',
    coompletion: false
}

// Empty list to add tasks
const tasks = []

const formEvent = document.getElementById("addForm")

// Add function
formEvent.addEventListener("submit", function addTask() {
    const name = document.getElementById("taskName");
    const description = document.getElementById("description");

    // add to array
    tasks.push(name, description)

})