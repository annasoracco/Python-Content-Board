import React, { Component } from 'react';
import CardList from './components/cardlist/CardList';
import Header from './components/header/Header';
import PageNav from './components/navbar/PageNav';
import page1 from './images/page1.png';
import page2 from './images/page2.png';
import page3 from './images/page3.png';
import './App.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = {
    searchText: [],
    loading: false,
    cards: [
      {
        id: 1,
        image: page1,
        link:
          'https://docs.microsoft.com/en-us/azure/azure-functions/functions-machine-learning-tensorflow?tabs=bash',
        tags: ['hands on', 'AI', 'machine learning', 100],
        title: 'Machine Learning',
        text: '',
      },
      {
        id: 2,
        image: page2,
        link:
          'https://docs.microsoft.com/en-us/learn/paths/intro-to-ml-with-python/',
        tags: ['hands on', 'AI', 'machine learning', 100],
        title: 'Intro to Python',
        text: '',
      },
      {
        id: 3,
        image: page3,
        link: 'https://channel9.msdn.com/Series/More-Python-for-Beginners',
        tags: ['videos', 'Python', 100],
        title: 'More Python',
        text: '',
      },
    ],
  };

  searchUsers = (text) => {
    this.setState({ loading: true });

    const list = this.state.searchText.push(text);

    this.setState({ searchText: list, loading: false });
    console.log(this.state.searchText);
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <PageNav searchUsers={this.searchUsers} />
        <CardList cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;
