import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Book from './components/Book/Book';
import BookList from './components/BookList/BookList';


const bookData = require('./components/BookList/books.json');
const bookList = bookData['books'];

class App extends Component {
  render() {
    return (
      <div>
    <NavBar />
    {/* <BookList bookList={bookList}/> */}
    </div>
    );
  }
}

export default App;
