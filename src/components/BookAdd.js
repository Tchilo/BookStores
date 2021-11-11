import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function BookAdd() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  const [author, setauthor] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const submitBookToStore = (e) => {
    const newBook = {
      id: uuidv4(),
      title: e.target.value,
      author: '',
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book Title .." />
      <form action="#">
        <select id="books" name="books">
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
      <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
    </>
  );
}

export default BookAdd;
