import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ text, scrolled, color = '#000' }) => (
  <h2 style={{
    fontFamily: 'Roboto Slab, Serif',
    fontSize: 24,
    margin: 0,
    display: 'flex',
    fontWeight: 550,
    color,
  }}
  >
  /
    <span style={{ color: '#ff0078' }}>/</span>
    &nbsp;
    <div style={scrolled
      ? { width: '100%', transition: 'width 1s' }
      : { width: '100%', transition: 'width 1s' }}
    >
      {text.charAt(0)}
      <span
        style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 1.5s' }}
      >
        {text.slice(1)}
      </span>
    </div>
  </h2>
);

Logo.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Logo;
