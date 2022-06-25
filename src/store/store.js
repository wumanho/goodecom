import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {rootReducer} from "./root-reducer";

// 处理集成中间件
const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares))
// 创建 store
export const store = createStore(rootReducer, undefined, composedEnhancers)

