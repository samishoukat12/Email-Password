import logo from './logo.svg';
import './App.css';
// import SignUp from './components/signup/SignUp';
import { Container } from 'react-bootstrap';
import Routing from './routing/Routing';
function App() {
  return (
    
  <Container style={{minHeight: "100vh"}} className="d-flex text-align-center justify-content-center">
     <div className="w-100" style={{maxWidth: "400px"}}>
       <Routing />
      </div>
     </Container>  
   
  );
}

export default App;
