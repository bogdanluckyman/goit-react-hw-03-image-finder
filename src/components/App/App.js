import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { fetchImage } from '../api';
import { HeroApp } from './App.styled';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    try {
      const foundImage = await fetchImage();
      this.setState({
        images: foundImage,
      });
    } catch (error) {}
  }

  render() {
    return (
      <HeroApp>
        <Searchbar />
        <ImageGallery images={this.state.images} />
        <button>Load More</button>
        <GlobalStyle />
      </HeroApp>
    );
  }
}
