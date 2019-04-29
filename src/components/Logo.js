import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ text, scrolled }) => (
  <h2 style={{
    fontFamily: 'Noto Serif',
    fontSize: 24,
    margin: 0,
    display: 'flex',
    fontWeight: 600,
  }}
  >
  /
    <span style={{ color: '#f442e5' }}>/</span>
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
};

export default Logo;
