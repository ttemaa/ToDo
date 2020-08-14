import React from "react";

import "./App.css";

import TodoList from "../TodoList";
import AddItem from "../AddItem";
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import SearchFilter from "../SearchFilter";
import ErrorBounbry from "../ErrorBounbry";

function App() {
  return (
    <ErrorBounbry>
      <div className="App">
        <Header />
        <div className="d-flex">
          <SearchPanel />
          <SearchFilter />
        </div>
        <TodoList />
        <AddItem />
      </div>
    </ErrorBounbry>
  );
}

export default App;

/*
      <Header />
      <SearchPanel />
      <SearchFilter />
      <TodoList />
      <AddItem />
*/
