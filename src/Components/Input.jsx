import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Actions/actions';

class Input extends Component {
  constructor(props) {
    super(props);
      this.state = {
        task: ''
      }
  }
  addTask(task) {
    //THIS ADDS THE ENTERED TASK TO THE LIST
    //THEN IT RESETS THE INPUT FIELD BACK TO BLANK
    this.props.addTask(this.state.task, (this.props.taskList.length + 1))
    this.setState({task: ''})
  }
  render() {
    return (
      <div className="main-input-div">
        <input
          placeholder="Input Task Here"
          value={this.state.task}
          onChange={event => this.setState({task: event.target.value})}
          onKeyDown={event => (event.key === 'Enter') ? this.addTask() : null}
        />
        <button
          onClick={() => this.addTask()}
          >Submit</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
   taskList: state.theTaskList
  };
}
const mapDispatchToProps =  {
 addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
