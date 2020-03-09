import React, { Component } from "react";
import { FaPencilAlt, FaRegTrashAlt} from "react-icons/fa";


export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      value: "",
      updateButton: false
    };
  }

  changeEvent = e => {
    var value = e.target.value;
    // console.log(value);
    this.setState({
      value: value
    });
  };

  submit = () => {
    if (this.state.value === "") {
      alert("Enter Some Text");
    } else {
      this.setState({
        list: [
          ...this.state.list,
          {
            id: Date.now(),
            value: this.state.value,
            updateButton: false
          }
        ],
        value: ""
      });
    }
  };

  onRemove = value => {
    // console.log(JSON.stringify(value))
    this.setState({
      list: this.state.list.filter(val => {
        return val.id !== value.id;
      })
    });
  };

  onEdit = item => {
    //   console.log(JSON.stringify(item))
    const filteredItems = this.state.list.filter(itemValue => {
      return itemValue.id !== item.id;
    });

    const selectedItem = this.state.list.find(
      itemValue => itemValue.id === item.id
    );
    // console.log(selectedItem);
    this.setState({
      list: filteredItems,
      value: selectedItem.value,
      updateButton: true
    });
  };

  onUpdate = () => {
    if (this.state.value === "") {
      alert("Enter Some Text");
    } else {
      this.setState({
        list: [
          ...this.state.list,
          {
            id: Date.now(),
            value: this.state.value
          }
        ],
        value: "",
        updateButton: false
      });
    }
  };
  componentDidMount() {
    this.nameInput.focus();
  }
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-6">
              <small className="font-weight-bold">Add Item</small>
              <input
                ref={input => {
                  this.nameInput = input;
                }}
                className="form-control mb-2"
                type="text"
                onChange={this.changeEvent}
                value={this.state.value}
                placeholder="Enter Text"
              />
              {this.state.updateButton === true ? (
                <button onClick={this.onUpdate} className="btn btn-info">Update</button>
              ) : (
                <button onClick={this.submit} className="btn btn-primary">Submit</button>
              )}
            </div>
            <div className="col-6">
              <small className="font-weight-bold">Items List</small>
              <ul  >
                {this.state.list.map((item, index) => {
                  return (
                    
                    <li className="listItem bg-white text-dark mt-1" key={index}>
                      {item.value}
                      <button className="iconButton float-right"
                      onClick={() => {
                        this.onRemove(item);
                      }}
                    >
                      <FaRegTrashAlt/>
                    </button>
                      <button className="iconButton float-right"
                        onClick={() => {
                          this.onEdit(item);
                        }}
                      >
                      <FaPencilAlt/>
                      </button>

                    </li>
                   
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
