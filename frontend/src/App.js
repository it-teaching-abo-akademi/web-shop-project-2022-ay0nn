import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './screens/Homepage'
import Shop from './screens/Shop'

function App() {
  return (
    
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Homepage/>
       {/* <Route exact path='/' component={<Homepage />} />
       <Route path='/product/:id' component={<Shop />} /> */}
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
