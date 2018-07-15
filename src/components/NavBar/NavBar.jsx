import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ImagaAvatar from './ImagaAvatar';
import BookList from '../BookList/BookList';
import SearchBar from 'material-ui-search-bar'
import Drawer from '../Drawer/Drawer';
import Document from '../Document/Document';

 /// TODO: UPDATE ME !!!!!
import samplePDF from '../static/test.pdf';
// *snip*

// import SearchBar from 'react-search-bar';


const bookData = require('../BookList/books.json');
const bookList = bookData['books'];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    books: bookList,
    activeBook: '',
  };

  handleSearch = (searchBook) => {
      const copyBookList = bookList;
      const newBookList = copyBookList.filter(book => 
      book.title.toLowerCase().indexOf(searchBook.toLowerCase()) > 0
      );

      if(newBookList.length === 0){
        this.setState({books: bookList});
      }else{
        this.setState({books: newBookList});
      }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
            <ImagaAvatar/>
          </Tabs>
        </AppBar>
        <div style={{width: '100%', display: 'block', marginTop: '80px'}}>
        <SearchBar
            onChange={(newValue) => this.setState({ activeBook: newValue })}
            onRequestSearch={() => this.handleSearch(this.state.activeBook)}
            value=''
            placeholder='Search Your Book'
        />
        </div>
        {value === 0 && <TabContainer>Item one</TabContainer>}
        {value === 1 && <TabContainer>
          <BookList bookList={this.state.books}/></TabContainer>}
        {value === 2 && <TabContainer><Document pdfDocument={samplePDF}/></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);