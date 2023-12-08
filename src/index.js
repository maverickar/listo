import './styles.css';
import init from './UI';
import createToDo from './toDoCreator';
console.log("Hello mom")

init();
const cleanHouse = createToDo("clean house", "what do you think...", "27/12", "high", "home");
console.log(cleanHouse);


