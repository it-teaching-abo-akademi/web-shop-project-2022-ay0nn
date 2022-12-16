import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './screens/Homepage'

function App() {
  return (
    <div>
    <Header />
    <main className='py-3'>
      <Container>
      <Homepage />
      </Container>
    </main>
    <Footer />
    </div>
  );
}

export default App;
