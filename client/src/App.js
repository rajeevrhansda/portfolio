import styled, { ThemeProvider } from 'styled-components'
import Center from './components/Center';
import Left from './components/Left';
import Navbar from './components/Navbar';
import Right from './components/Right';
import Footer from './components/Footer';
import { darkTheme, lightTheme } from './Theme/Theme'
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;





function App() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getThemeInMemory = localStorage.getItem('theme');
  const themeInMemory = (getThemeInMemory === 'true');
  const [darkMode, setDarkmode] = useState(themeInMemory == null ? systemTheme : themeInMemory);
  localStorage.setItem('theme', darkMode);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Container>
            <Navbar />
            <Left />
            <Center darkMode={darkMode} setDarkmode={setDarkmode} />
            <Right />
            <Footer />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
