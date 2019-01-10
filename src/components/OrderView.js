import React from "react";

export default class OrderView extends React.Component {
  render() {
    return (
      <div>
        {this.props.book.bookName}
        <br />
        <button
          className="btn btn-danger"
          onClick={event =>
            this.props.removeFromOrder(this.props.book.bookName)
          }
        >
          Remove from Order
        </button>
      </div>
    );
  }
}
