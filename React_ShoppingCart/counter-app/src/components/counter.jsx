import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // imageURl: "https://picsum.photos/200"

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  constructor() {
    super();
    console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = product => {
    console.log(this.props.value);
    console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    let classes = this.getBagdeClasses();
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(22)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
    //this.state.tags.length === 0 && "Please create a new tag"}
    //this.renderTags()}
    //<img src={this.state.imageURl} atl="" />
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
