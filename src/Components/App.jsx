import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Input from './Input';
import NeedToDo from './NeedToDo';
import Done from './Done';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskList: []
    }
  }
  updatingTaskList() {
    this.setState({taskList: this.props.taskList})
  }
  render() {
    return (
      <div className="main-app-div">
        <NavBar />
        <Input />
        <NeedToDo update={this.updatingTaskList.bind(this)}/>
        <Done update={this.updatingTaskList.bind(this)}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    taskList: state.theTaskList
  }
}

export default connect(mapStateToProps, null)(App);
