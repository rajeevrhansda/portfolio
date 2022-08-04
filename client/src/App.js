import styled from 'styled-components'
import Center from './components/Center';
import Left from './components/Left';
import Navbar from './components/Navbar';
import Right from './components/Right';


const Container = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  position: relative;
`;
const Footer = styled.div`

`;





function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Left />
        <Center />
        <Right />
      </Container>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
