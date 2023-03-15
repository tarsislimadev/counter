import './index.css'

function Square({
  onClick = (() => console.log('not implemented')),
  value = 0,
}) {
  return (
    <div className={'square'} onClick={() => onClick()}>
      {value}
    </div>
  )
}

export default Square
