// There are also project (categories) for the to-dos.
import { getFormData } from "./UI"
export default function addNewTodo(title, description, dueDate, priority, project) {
    getNewTodoFromInput();

    return {
        title,
        description,
        dueDate,
        priority,
        project
    }
}

function getNewTodoFromInput() {
    console.log(getFormData());
    
}