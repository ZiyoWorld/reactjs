import UpdateWith from '../withCounter';

const Hover = ({count, setCount}) => {

  return (
    <div>
        <h1>Hover</h1>
        <button onMouseOver={setCount}>Hover {count}</button>
    </div>
  )
}

export default UpdateWith(Hover);