import styled from "styled-components";


export const Select = styled.select`
  padding: 5px;
  border: 1px solid teal;
  border-radius: 5px;
  outline: none;
`

export const Image = styled.div`
  position: relative;
  .overlay {
    display: none;
    .link {
      text-decoration: none;
      color: #eee;
      width: 100%;
      span {
        border: 1px solid #eee;
        padding: 1% 2%;
        cursor: pointer;
      }
    }
  }
  &:hover .overlay {
    display: inline-block;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 5%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #3333339f;
    color: white;
  }
`;

export const Cart = styled.i`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  button {
    background: teal !important;
    color: #eee !important;
  }
`;

export const Price = styled.div`
  display: flex;
  i {
    padding: 0 5px;
  }
  .sub-price {
    display: flex;
  }
`;

export const Container = styled.div`
  margin: 2% 10%;
  padding: 1% 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 4%;
  overflow-x: auto;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FilteredContainer = styled.div`
  margin: 2% 10%;
  padding: 2% 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4%;
  overflow-x: auto;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SingleParent = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-gap: 2%;
  padding: 1% 10%;
  height: 70vh;
  .first {
    display: grid;
    grid-template-columns: 50% 50%;
    .first-sub-child {
      /* background: yellow; */
      padding: 5%;
    }
    .second-sub-child {
      padding: 5%;
      .price {
        padding: 10px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        div {
          padding: 2% 0;
        }
      }
    }
  }
  .second {
    /* background: gray; */
  }
`;
