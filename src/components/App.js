import React from "react";
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";

import "../index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      order: []
    };
  }

  addNewBook = book => {
    let newBooks = [...this.state.books];

    newBooks.push(book);

    this.setState({
      books: newBooks
    });
  };

  addToOrder = book => {
    return this.setState({
      order: [...this.state.order, book]
    });
  };

  removeFromOrder = title => {
    return this.setState({
      order: this.state.order.filter(book => title !== book.bookName)
    });
  };

  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <AdminPanel books={this.state.books} addBook={this.addNewBook} />
          <Inventory books={this.state.books} addToOrder={this.addToOrder} />
          <Order
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
      </div>
    );
  }
}

export default App;
