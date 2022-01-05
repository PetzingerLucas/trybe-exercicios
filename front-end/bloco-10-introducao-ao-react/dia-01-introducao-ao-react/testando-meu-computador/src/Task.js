import React, {Component} from "react";

const taskList = ['Arrumar o Quarto', 'Se organizar para a viagem', 'Dar comida pro Café']

class Task extends Component {
    render() {
    return (
        <ol>
        {taskList.map((task)=> <li>{task}</li>)}
        </ol>
    );
  }
}
  export default Task
//   export taskList