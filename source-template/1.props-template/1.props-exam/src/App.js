import React, { Component } from 'react';
import BookList from './components/BookList';

import Books from './static_data/Books';

class App extends Component {
  render() {
      return(

        // Books 데이터를 books로 정의하여 전달하겠다.
        <BookList books={ Books }/>
      )
  }
}

export default App;
