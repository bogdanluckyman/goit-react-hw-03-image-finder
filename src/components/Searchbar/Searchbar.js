import { FormBtn, FormStyled, SearchbarStyle } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchbarStyle>
      <FormStyled>
        <FormBtn type="submit">
          <span>Search</span>
        </FormBtn>

        <input type="text" placeholder="Search images and photos" />
      </FormStyled>
    </SearchbarStyle>
  );
};
