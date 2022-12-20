import { Container } from 'react-bootstrap'
import { BrowserRouter, BrowserRouter as Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './screens/Homepage'
import Shop from './screens/Shop'

function App() {
  return (
    <BrowserRouter> 
    <main className="py-3">
           <Container>
        <Header/>
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route path="/product/:id" element={<Shop />} />
      </Routes>  
      </Container>

    </main>
    <Footer/>

    </BrowserRouter>
    
    // <Router>
    // <Header />
    // <main className='py-3'>
    //   <Container>
    //    <Homepage/>
    //    <Route exact path='/' component={<Homepage />} />
    //    <Route path='/product/:id' component={<Shop />} />
    //   </Container>
    // </main>
    // <Footer />
    // </Router>
  );
}

export default App;
