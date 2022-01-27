
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import CustomerContainer from './components/CustomerContainer';
import SignUpForm from './components/SignUpForm';
import SignUpFormName from './components/SignUpFormName';
import SignupFormError from './components/SignupFormError';
import { DisplayingErrorMessagesExample } from './components/SignupSchema';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer/>
        <SignupFormError/>
        <DisplayingErrorMessagesExample/>
      </div>
    </Provider>
  );
}

export default App;
