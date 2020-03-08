import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  RefinementList,
  RangeSlider,
  Stats,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
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
                  <h3>Tags</h3>
                  <RefinementList attribute="tags" />
                  <RangeSlider attribute="popularity_score" min="10" />
                </div>
                <div className="search-panel__results">
                  <SearchBox
                    className="searchbox"
                    translations={{
                      placeholder: '',
                    }}
                  />
                  <Stats />
                  <Hits hitComponent={Hit} />

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

function Hit(props) {
  const description =
    props.hit.description.length > 100
      ? `${props.hit.description.substr(0, 100)}...`
      : props.hit.description;
  return (
    <div className="hitTile">
      <div className="hitImage">
        <img
          src={props.hit.image_url}
          style={{ flex: 0, height: 120, width: undefined }}
          alt={props.hit.name}
        />
      </div>
      <h3>
        <strong>{props.hit.name}</strong>
      </h3>
      <p>{description}</p>
      <p className="tiny">Viewed {props.hit.viewed_count} times</p>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
