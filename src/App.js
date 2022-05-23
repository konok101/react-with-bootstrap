import logo from './logo.svg';
import './App.css';
/* import CardGroup from './components/CardGroup/CardGroup'
 */
import { Button } from 'react-bootstrap';
import Card from './components/Card/Card';
 

function App() {
  return (
    <div className="App">
 <Card></Card>
 <Button variant='danger'>My button </Button>
    </div>
  );
}

export default App;
