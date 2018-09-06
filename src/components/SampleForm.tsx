import * as React from 'react';
import { connect } from 'react-redux';

import * as samplesAction from '../actions/samples'
import { SamplesAction } from '../reducers/samples';

interface Props {
  addTodo : (title : string) => any;
}

interface State {
  name : string;
}

class SampleForm extends React.Component < Props,
State > {
  public readonly state : Readonly < State > = {
    name: ''
  };

  public handleNameChange : React.ReactEventHandler < HTMLInputElement > = ev => {
    this.setState({name: ev.currentTarget.value});
  };

  public handleAdd = () => {
    this
      .props
      .addTodo(this.state.name);
    this.setState({name: ''});
  };

  public render() {
    const {name} = this.state;

    return (
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          value={name}
          onChange={this.handleNameChange}/>
        &nbsp;
        <button type="button" onClick={this.handleAdd} disabled={!name}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state : SamplesAction) => ({});

export default connect(mapStateToProps, {
  addTodo: (name : string) => samplesAction.setName(name)
})(SampleForm);