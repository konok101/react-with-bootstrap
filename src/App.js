import logo from './logo.svg';
import './App.css';
/* import CardGroup from './components/CardGroup/CardGroup'
 */
import { Button } from 'react-bootstrap';
import Card from './components/Card/Card';
import CardGroup1 from './components/CardGroup1/CardGroup1';
 

function App() {
  return (
    <div className="App">
  <Card></Card>
 <CardGroup1></CardGroup1>

 <Button variant='danger'>My button </Button>
    </div>
  );
}

export default App;
