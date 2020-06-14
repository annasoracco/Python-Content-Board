import React, { Component } from 'react';
import CardList from './components/cardlist/CardList';
import Header from './components/header/Header';
import PageNav from './components/navbar/PageNav';
import Footer from './components/footer/Footer';
import page1 from './images/page1.png';
import page2 from './images/page2.png';
import page3 from './images/page3.png';
import './App.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = {
    matched: [],
    categories: [],
    all: false,
    selected: false,
    searched: false,
    cards: [
      {
        id: 1,
        image: page1,
        link:
          'https://docs.microsoft.com/en-us/azure/azure-functions/functions-machine-learning-tensorflow?tabs=bash',
        tags: ['hands on', 'ai', 'machine learning', '100'],
        title: 'Machine Learning',
        text: '',
        category: 'Videos',
      },
      {
        id: 2,
        image: page2,
        link:
          'https://docs.microsoft.com/en-us/learn/paths/intro-to-ml-with-python/',
        tags: ['hands on', 'ai', 'machine learning', '100'],
        title: 'Intro to Python',
        text: '',
        category: 'Demos',
      },
      {
        id: 3,
        image: page3,
        link: 'https://channel9.msdn.com/Series/More-Python-for-Beginners',
        tags: ['videos', 'python', '100'],
        title: 'More Python',
        text: '',
        category: 'Hands on labs',
      },
    ],
  };

  handleClick = (clicked) => {
    this.setState({ searched: false });
    this.setState({ selected: true });
    this.setState({ categories: [] });
    if (clicked === 'All') {
      this.showAll();
    }

    let cats = this.state.cards.filter((card) => card.category === clicked);
    this.setState((state) => {
      const categories = state.categories.concat(cats[0]);

      return {
        categories,
      };
    });
  };

  showAll = () => {
    this.setState({ all: true, selected: false, searched: false });
  };

  searchUsers = (text) => {
    this.setState({ selected: false });
    this.setState({ searched: true });
    this.setState({ matched: [] });

    this.state.cards.forEach((x) => {
      x.tags.forEach((t) => {
        if (t === text.toLowerCase()) {
          this.addArrItem(x);
        }
      });
    });
  };

  addArrItem = (x) => {
    this.setState((state) => {
      const matched = state.matched.concat(x);

      return {
        matched,
      };
    });
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <PageNav
          searchUsers={this.searchUsers}
          handleClick={this.handleClick}
        />
        <CardList
          removeArrayItem={this.removeArrayItem}
          cards={this.state.cards}
          matched={this.state.matched}
          searched={this.state.searched}
          categories={this.state.categories}
          selected={this.state.selected}
          all={this.state.all}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
