import { Provider } from 'react-redux';
import './App.css'
import Counter from './components/Counter'
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Redux/counterReducer';

function App() {

  const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  })

  return (
    <>
    <Provider store={store}>
      <Counter />
    </Provider>
    </>
  )
}

export default App

// The store is the central place where we will access the data.
// Here we need to import Provider, configureStore and counterReducer.
// We wrap the component with the Provider.
// We pass the store to the provider.
// All the components will access this store.
// We will retrive the data on our Counter.jsx file.





