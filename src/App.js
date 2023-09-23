import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import TodoList from './components/TodoList';
import Pizza from './components/Pizza';

function App() {
  return (
    <div className="container mt-5">
      <Pizza />
    </div>
  );
}

export default App;
