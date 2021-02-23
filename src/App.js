import './App.css';
export default App;
import Animal from './Animal'
import Human from './Human';

function App() {
  return (
    <div>
      <h1>Title</h1>
      <Animal mammal="dog" name="Rocco"/>
      <Animal mammal="cat" name="Garfield"/>
      <Human name="rodgers" location="State Farm"/>
    </div>
  );
}

export default App;