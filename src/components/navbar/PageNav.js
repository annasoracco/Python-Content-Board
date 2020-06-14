import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PageNav extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (e) => {
    const clicked = document.getElementById(e.target.id).innerHTML;
    this.props.handleClick(clicked);
  };
  render() {
    return (
      <div>
        {/* <form onSubmit={this.onSubmit} className='form'>
          <input
            type='checkbox'
            id='python'
            name='python'
            value='python'
            onClick={this.onClick}
          />
          <label for='python'>Python</label>

          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form> */}
        <Navbar bg='light' variant='light'>
          <Nav className='mr-auto'>
            <Nav.Link id='all' onClick={this.onClick}>
              All
            </Nav.Link>
            <Nav.Link id='demos' onClick={this.onClick}>
              Demos
            </Nav.Link>
            <Nav.Link id='workshops' onClick={this.onClick}>
              Workshops
            </Nav.Link>
            <Nav.Link id='handson' onClick={this.onClick}>
              Hands on labs
            </Nav.Link>
            <Nav.Link id='presentations' onClick={this.onClick}>
              Presentations
            </Nav.Link>
            <Nav.Link id='videos' onClick={this.onClick}>
              Videos
            </Nav.Link>
            <Nav.Link id='addResources' onClick={this.onClick}>
              Additional Resources
            </Nav.Link>
          </Nav>
          <Form inline onSubmit={this.onSubmit}>
            <FormControl
              value={this.state.text}
              onChange={this.onChange}
              type='text'
              name='text'
              placeholder='Search'
              className='mr-sm-2'
            />
            <Button type='submit' value='search' variant='outline-primary'>
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default PageNav;
