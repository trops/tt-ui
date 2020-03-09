import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  RefinementList,
  Stats,
} from 'react-instantsearch-dom';
import Hit from './Hit';
import TedHits from './TedHits';
import TedModal from './TedModal';
import './App.css';

const searchClient = algoliasearch(
  'QTGM35U7DL',
  'e915b0e685d66b4907d536eaabc6d78a'
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      hit: null,
    };
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      hit: null,
    });
  };

  handleClickHit = hit => {
    this.setState({
      hit,
      showModal: true,
    });
  };

  renderDetailModal = () => {
    const { showModal, hit } = this.state;
    return hit !== null ? (
      <TedModal
        showModal={showModal}
        hit={hit}
        handleCloseModal={this.handleCloseModal}
      />
    ) : null;
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">TED talks</a>
          </h1>
        </header>
        {this.renderDetailModal()}
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="dev_TEDTALKS">
            <div className="right-panel">
              <div className="search-panel">
                <div className="search-panel__filters">
                  <h3>Tags</h3>
                  <br />
                  <RefinementList attribute="tags" />
                </div>
                <div className="search-panel__results">
                  <SearchBox
                    className="searchbox"
                    translations={{
                      placeholder: '',
                    }}
                  />
                  <div className="statsbox">
                    <Stats />
                  </div>
                  <div className="hitsbox">
                    <TedHits hitComponent={Hit} onClick={this.handleClickHit} />
                  </div>
                  <div className="pagination">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

export default App;
