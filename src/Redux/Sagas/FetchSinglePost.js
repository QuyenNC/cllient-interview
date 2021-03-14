import { call, put, takeEvery} from 'redux-saga/effects'

import { SET_SINGLE_POST } from '../SignlePost';
import SinglePost from './SinglePostRequest';
  function* fetchSinglePosts(action) {
   try {
      const res = yield call(SinglePost, {id :  action.payload.id});
      yield put({type: SET_SINGLE_POST,payload : res.data.success.post});
   } catch (e) {
     console.log(e);
   }
}

export default function* mySaga() {
   yield takeEvery("FETCH_SINGLE_REQUESTED", fetchSinglePosts);
 }