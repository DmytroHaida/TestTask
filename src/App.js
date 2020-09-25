import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import PostContainer from './components/Posts/PostsContainer'
import store from './redux/store/Redux-Store'
function App() {
  return (
    <Provider store={store}>
      <div>
          <PostContainer/>
      </div>
    </Provider>
  );
}

export default App;
