import React from 'react'
import ReactDOM from 'react-dom'
// function Greeting() {
//   return <h4>This is Andrew and this is my first component</h4>
// }
function Greeting() {
  return (
    <div>
      <h1>This is Andrew and this is my first component</h1>
    </div>
  )
}
// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'))
// }
ReactDOM.render(<Greeting/>, document.getElementById('root'))
