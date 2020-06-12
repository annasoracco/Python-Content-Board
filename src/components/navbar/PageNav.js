import React, { Component } from 'react';
//import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PageNav extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
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
        </form>
      </div>
      // <Navbar bg='light' variant='light'>
      //   <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      //   <Nav className='mr-auto'>
      //     <Nav.Link href='#home'>Home</Nav.Link>
      //     <Nav.Link href='#features'>Features</Nav.Link>
      //     <Nav.Link href='#pricing'>Pricing</Nav.Link>
      //   </Nav>
      //   <Form inline onSubmit={this.onSubmit}>
      //     <FormControl
      //       value={this.state.text}
      //       onChange={this.onChange}
      //       type='text'
      //       placeholder='Search'
      //       className='mr-sm-2'
      //     />
      //     <Button type='submit' variant='outline-primary'>
      //       Search
      //     </Button>
      //   </Form>
      // </Navbar>
    );
  }
}

export default PageNav;
