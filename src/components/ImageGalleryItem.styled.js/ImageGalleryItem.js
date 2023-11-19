import React from 'react';
import {
  GalleryItemImage,
  GalleryItemWrapper,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => (
        <GalleryItemWrapper key={id}>
          <GalleryItemImage src={webformatURL} alt="" />
        </GalleryItemWrapper>
      ))}
    </>
  );
};
