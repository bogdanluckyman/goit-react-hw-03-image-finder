import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { fetchImage } from '../api';
import { HeroApp } from './App.styled';
import { Button } from 'components/BtnLoadMore/BtnLoadMore';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const { query, page } = this.state;
        const currentQuery = query.split('/').pop();
        const foundImage = await fetchImage({ currentQuery, page });
        console.log(foundImage);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...foundImage.hits],
            totalHits: foundImage.totalHits,
          };
        });
      } catch (error) {}
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.imagesValue.value;
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      page: 1,
      images: [],
      totalHits: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <HeroApp>
        <Searchbar submit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.totalHits !== null &&
          this.state.images.length < this.state.totalHits && (
            <Button clickFunc={this.loadMore} />
          )}
        <GlobalStyle />
      </HeroApp>
    );
  }
}
