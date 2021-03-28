import React, { Component } from 'react';
import BookListItem from './BookListItem';

import { List, ListItem } from '@material-ui/core';

class BookList extends Component {

    render(){
        //const books = this.props.books;
        const { books } = this.props;
        const bookItems = books.map( book => {
            return (
                <ListItem>
                    <BookListItem book={book} />
                </ListItem>
            )
        })


        return(
            <List>
                <ListItem>
                    <BookListItem book={books[0]} />
                </ListItem>
                <ListItem>
                    <BookListItem book={books[1]} />
                </ListItem>
                <ListItem>
                    <BookListItem book={books[2]} />
                </ListItem>
            </List>
        )
    }
}

export default BookList;
