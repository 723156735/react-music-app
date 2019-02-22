import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Player from './pages/Player';
import { initialState, reducer } from './reducer';
import Context from './context';
import Home from './pages/Home';
import Search from './pages/Search';
import { CHANGE_CURRENT_SONG } from './reducer/actionType';
import { fetchSong } from './utils/song';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      const current = await fetchSong(1342022280);
      dispatch({ type: CHANGE_CURRENT_SONG, payload: current });
      console.log(current);
    })();
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1 className='app-title'>MUSIC</h1>
      <Router>
        <>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
        </>
      </Router>
      {/*<Player />*/}
    </Context.Provider>
  );
};

export default App;
