import React from 'react';

export const ImageGalleryItem = ({ images }) => {
  return (
    <div>
      {images.map(({ id, webformatURL }) => (
        <li key={id}>
          <img src={webformatURL} alt="" />
        </li>
      ))}
    </div>
  );
};
