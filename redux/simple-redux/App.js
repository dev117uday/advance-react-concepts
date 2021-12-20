import { useSelector } from 'react-redux';

function App() {

  const state = useSelector(state => state);

  console.log(actionAccount);

  return (
    <div className="container mt-3">
      <h1>Hello world</h1>
      <h4> Balance :  {state.account} </h4>
    </div>
  );
}

export default App;
