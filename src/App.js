
import './App.css';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Movie from './Components/Movie';

function App() {
  return (
    <>
    <Header></Header>
    <div className='p-2 m-2 text-center'>
    <Counter></Counter>
    </div>
    <div className='container col-12 col-md-6 my-3 border '>
      <Movie></Movie>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
