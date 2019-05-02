import React from 'react';
import BM from "@material-ui/icons/Book"
import { FaGithub } from 'react-icons/fa';

export const headerData = {
    avatarImage: 'https://image.flaticon.com/icons/svg/374/374980.svg', //eslint-disable-line
    menuItems: [
      { title: 'BLOG', icon: <BM style={{ marginRight: 10, fontSize: 18 }} />, link: '/blog' },
      { title: 'GITHUB', icon: <FaGithub style={{ marginRight: 10 }} />, link: 'https://github.com/mattshardman' },
      { title: 'CONTACT', color: '#f442e5', link: '/contact' },
    ],
  };
  