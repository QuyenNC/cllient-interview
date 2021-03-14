import { call, put} from 'redux-saga/effects'

import { SET_DATA } from '../Posts';
import postRequest from './PostRequest';
export default  function* fetchPosts(action) {
   try {
      const res = yield call(postRequest);
      yield put({type: SET_DATA,payload : res.data.success.posts});
   } catch (e) {
     console.log(e);
   }
}

