import './App.css';
import CakeStore from './Comp./CakeStore';
import {Provider} from 'react-redux'
import store from './redux/Store';
import CakeHookCon from './Comp./CakeHookCon';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeStore />
        <CakeHookCon/>
      </div>
    </Provider>
  );
}

export default App;
