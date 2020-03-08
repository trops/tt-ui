import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  RefinementList,
  Stats,
} from 'react-instantsearch-dom';
import Hit from './Hit';
import './App.css';

const searchClient = algoliasearch(
  'QTGM35U7DL',
  'e915b0e685d66b4907d536eaabc6d78a'
);

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">TED talks</a>
          </h1>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="dev_TEDTALKS">
            <div className="right-panel">
              <div className="search-panel">
                <div className="search-panel__filters">
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
                    <Hits hitComponent={Hit} />
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
