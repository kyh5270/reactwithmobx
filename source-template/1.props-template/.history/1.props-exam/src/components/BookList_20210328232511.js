import React, { Component } from 'react';
import BookListItem from './BookListItem';

import { List, ListItem, Container } from '@material-ui/core';

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
            <Container>
                <List>
                    {bookItems}
                </List>
            </Container>

        )
    }
}

export default BookList;
