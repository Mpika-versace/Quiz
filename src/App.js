
import { ThemeProvider } from 'styled-components';
import Theme from './assets/Theme';
import GlobalStyle from './assets/Globalstyle';
import Header from './components/Header';
import Landing from './components/Landing'
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Errorpage from './pages/Errorpage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() 
{
  
  return (

    <ThemeProvider theme={Theme}>
      <Router>
        
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/welcome"><Welcome /></Route>
          <Route exact path="/"><Landing /></Route>
          <Route path="/login"> <Login /></Route>
          <Route path="/signup"> <SignUp /></Route>
          <Route > <Errorpage /></Route>
        
        </Switch> 
        

        <Footer />
        
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
