
import { ThemeProvider } from 'styled-components';
import Theme from './assets/Theme';
import GlobalStyle from './assets/Globalstyle';
import Header from './components/Header';
import Landing from './components/Landing'


function App() 
{
  
  return (
    <ThemeProvider theme={Theme}>
      <div>
        
        <GlobalStyle />
        <Header />
        <Landing />
        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
