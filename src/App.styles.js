import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
`;
const Header = styled.h2`
  text-align: center;
  color: black;
  text-shadow: 4px 6px 4px lightblue;
`;
const Interpreted = styled.div`
  border: 2px solid #ccc;
  border-radius: 4px;
  height: 60%;
  width: 48%;
  position: fixed;
  z-index: 1;
  top: 70;
  right: 1.6%;
`;
const AreaText = styled.textarea`
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 60%;
  width: 48%;
  position: fixed;
  z-index: 1;
  top: 70;
  left: 1.6%;
  /*box-sizing: border-box;*/
`;
const Btn = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  background-color: lightgray;
  cursor: pointer;
  padding: 10px 30px;
  :hover {
    background-color: black;
    color: white;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;
export { Container, Header, Interpreted, AreaText, Btn, Content };
