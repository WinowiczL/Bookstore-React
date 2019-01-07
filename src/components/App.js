import React from "react";
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div>
        <AdminPanel />
        <Order />
        <Header />
        <Inventory />
      </div>
    );
  }
}

export default App;
