import {
    createStore
} from 'redux'
import list from './reducer'
const store = createStore(list)
window.store = store
export default store