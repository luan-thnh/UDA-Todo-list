import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container mt-5">
      <TodoList />
    </div>
  );
}

export default App;
