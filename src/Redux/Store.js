import {createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import  postsReducer  from './Posts';
import singlePostRedeucer from './SignlePost';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

import fetchPosts from './Sagas/FetchPosts';
import FetchSinglePost from './Sagas/FetchSinglePost';





const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    posts : postsReducer,
    singlePost : singlePostRedeucer
})



const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['posts']
  }
  const persistedReducer = persistReducer(persistConfig, reducer)

  const searchMiddleware = store => next => action =>{
    if(typeof action === 'function'){
      return action(next)
    }
    return next(action)
  }
const store =  createStore(persistedReducer,applyMiddleware(sagaMiddleware,searchMiddleware));
sagaMiddleware.run(FetchSinglePost)
sagaMiddleware.run(fetchPosts)

export let persistor = persistStore(store);

export default store;