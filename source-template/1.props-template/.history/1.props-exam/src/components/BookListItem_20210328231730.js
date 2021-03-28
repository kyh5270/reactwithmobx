import React, { Component } from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';

class BookListItem extends Component {

    render(){

        const { book } = this.props;

        return(
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={book.imgUrl}/>
                    </Grid>
                    <Grid item>
                        <
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
