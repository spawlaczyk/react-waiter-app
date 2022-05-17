import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import TableForm from './components/features/TableForm/TableForm';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<TableForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;