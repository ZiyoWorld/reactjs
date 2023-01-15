import UpdateWith from '../withCounter';

const Counter = ({count, setCount}) => {
   

  return (
    <div>
        <h1>Counter </h1>
        <button onClick={setCount}>Clicked {count}</button>
    </div>
  )
}

export default UpdateWith(Counter);