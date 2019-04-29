import React from 'react';
import { FaBook, FaGithub } from 'react-icons/fa';

export const headerData = {
    avatarImage: 'https://image.flaticon.com/icons/svg/374/374980.svg', //eslint-disable-line
    menuItems: [
      { title: 'BLOG', icon: <FaBook style={{ marginRight: 10 }} />, link: '/blog' },
      { title: 'GITHUB', icon: <FaGithub style={{ marginRight: 10 }} /> },
      { title: 'CONTACT', color: '#f442e5', link: '/contact' },
    ],
  };
  