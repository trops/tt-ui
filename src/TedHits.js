import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import Hit from './Hit';

class TedHits extends React.Component {
  handleHitClick = hitData => {
    this.props.onClick(hitData);
  };

  render() {
    return (
      <div className="ais-Hits">
        <ul className="ais-Hits-list">
          {this.props.hits.map(hit => (
            <li className="ais-Hits-item" key={hit.objectID}>
              <Hit hit={hit} onClick={this.props.onClick} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TedHits.propTypes = {
  hits() {},
  onClick() {},
};

export default connectHits(TedHits);
