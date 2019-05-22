import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Image from 'gatsby-image';

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/cat.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Avatar = () => (
  <StaticQuery
    query={avatarQuery}
    render={data => (
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt="me"
        style={{
          marginBottom: 0,
          minWidth: 40,
          borderRadius: '100%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
    )}
  />
);

export default Avatar;
