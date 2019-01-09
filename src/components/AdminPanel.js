import React from "react";

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        bookName: "",
        bookAuthor: "",
        bookDescription: "",
        bookOnStock: false,
        bookImage: ""
      }
    };
  }

  handleChange = event => {
    let newBook;

    if (event.target.name === "bookOnStock") {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.checked
      };
    } else {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.value
      };
    }

    this.setState({
      book: newBook
    });
  };

  render() {
    return (
      <div className="adminPanel col-md-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book name"
              id="bookName"
              name="bookName"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Author name"
              id="bookAuthor"
              name="bookAuthor"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.author}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Book description"
              id="bookDescription"
              name="bookDescription"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.description}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="bookOnStock"
              name="bookOnStock"
              className="form-check-input"
              onChange={this.handleChange}
              checked={this.state.book.onStock}
            />
            <label htmlFor="bookOnStock" className="form-check-label">
              On stock
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book image"
              id="bookImage"
              name="bookImage"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.image}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
