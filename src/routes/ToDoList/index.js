import React, { Component } from 'react';
import base from '../../firebase';
import AddItem from './AddItem';
import List from './List';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { list: [], loading: true }
  }

  componentDidMount() {
    this.ref = base.syncState(`todoList`, {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({ loading: false })
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  handleAddItem(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }
  handleRemoveItem(index){
    const newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> Piano Teacher APP TO-DO List </h3>
              <AddItem add={this.handleAddItem.bind(this)}/>
              {this.state.loading === true ? <h3> LOADING ...</h3> : <List items={this.state.list} remove={this.handleRemoveItem.bind(this)} />}
            </div>
          </div>
        </div>
      </div>

    )
  }
}