import * as React from 'react';

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};


function getMasterMargin() {
  return 30
}

export {getMasterMargin, generateRandomColor}