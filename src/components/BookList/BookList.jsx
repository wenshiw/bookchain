import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const bookData = require('../BookList/books.json');
const bookList = bookData['books'];
console.log(bookList);

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: '20px',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  

const BookList = (props) => {
    const { classes } = props;
    const books = bookList.map(book => {
        return (
            <Grid item xs key={book.author} style={{marginTop: '30px'}}>
                < Book book={book}
                       key={book.title}>
                </Book>
            </Grid>
    );
    });
    return(
        <div className={classes.root}>
      <Grid container spacing={24} alignItems="center">
        {books}
      </Grid>
    </div>
    )
}
export default withStyles(styles)(BookList);
