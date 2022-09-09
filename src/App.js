import './App.css';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App flex justify-center flex-col gap-9 text-center items-center">
        <h1 className='text-5xl'>App</h1>
        <Counter/>
    </div>
  );
}

export default App;
