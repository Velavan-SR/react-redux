import { createStore } from "redux"
import reducer from "./Reducer"
import { decrementLike, incrementLike } from "./Action"
import { useState } from "react"


const store = createStore(reducer)


function CounterLike() {

    const [like,setLike] = useState(0)

    store.subscribe(() => setLike(store.getState().like))



  return (
    <div>
        <div>Likes: {like}</div>
        <button onClick={() => store.dispatch(incrementLike())}>Like</button>
        <button onClick={() => store.dispatch(decrementLike())}>Unlike</button>
    </div>
  )
}

export default CounterLike