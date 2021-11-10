import React from 'react';
import Navbar from './Navbar';
import BookList from './BookList';
import BookAdd from './BookAdd';

function BookStore() {
  return (
    <>
      <Navbar />
      <BookList />
      <BookAdd />
    </>
  );
}

export default BookStore;
