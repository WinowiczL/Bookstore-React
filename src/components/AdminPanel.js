import React from "react";

class AdminPanel extends React.Component {
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
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Author name"
              id="bookAuthor"
              name="bookAuthor"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Book description"
              id="bookDescription"
              name="bookDescription"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="bookOnStock"
              name="bookOnStock"
              className="form-check-input"
            />
            <label for="bookOnStock" className="form-check-label">
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
