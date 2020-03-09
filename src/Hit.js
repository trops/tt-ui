import React from 'react';
import PropTypes from 'prop-types';
import './Hit.css';

class Hit extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.hit);
  };

  render() {
    const { hit } = this.props;
    const speakers = hit.speakers.length > 0 ? hit.speakers.join(', ') : null;
    const description =
      hit.description.length > 100
        ? `${hit.description.substr(0, 100)}...`
        : hit.description;
    return (
      <div className="hitTile" onClick={this.handleClick}>
        <div className="hitImage">
          <img
            src={hit.image_url}
            style={{ flex: 0, height: 120, width: undefined }}
            alt={hit.name}
          />
        </div>
        <h3>
          <strong>{hit.name}</strong>
        </h3>
        <p>{description}</p>
        <p>
          <span className="featuring">featuring</span>
          <br />
          <strong>{speakers}</strong>
        </p>
        <p className="tiny">{hit.viewed_count} views</p>
      </div>
    );
  }
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  onClick() {},
};

export default Hit;
