import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, booksAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spiner';
import './book-list.css';
import ErrorIndicator from '../error-indicator';


const BookList = ({books, onAddetToCart})=> {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}
                onAddetToCart = {()=> onAddetToCart(book.id) }
              /></li>
          )
        })
      }
    </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
      this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddetToCart  } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <BookList books = {books}  onAddetToCart = {onAddetToCart}/>
  
  }
}



const mapStateToProps = ({ bookList:{books, loading, error} }) => {
  return { books, loading, error};
};

const mapDispatchToProps =(dispatch, {bookstoreService})=> {
  
  return {
    fetchBooks: fetchBooks(bookstoreService,dispatch ),
    onAddetToCart: (id)=> (dispatch(booksAddedToCart(id)))
    }
    
  }



export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);