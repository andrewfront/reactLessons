import React from 'react'
import ReactDOM from 'react-dom'
//css

import './index.css'

// function Greeting() {
//   return <h4>This is Andrew and this is my first component</h4>
// }
function Booklist() {
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
}
function Book() {
  return <article className='book'>
    {/* <Image/>
    <Title/>
    <Author/> */}
    <img className='image' src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg" alt="moon" />
    <h1>I Love You to the Moon and Back</h1>
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>Amelia Hepworth </h4>
    </article>
}
// function Image() {
//   return <img className='image' src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg" alt="moon" />
// }
// function Title() {
//   return <h1>I Love You to the Moon and Back</h1>
// }
// function Author() {
//   return <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>Amelia Hepworth </h4>
// }
// const Person = () => {
//   return <h1>This is Andrew and this is my first component</h1>
// }
// const Message = () => {
//   return <p>This is my Paragraph</p>
// }
// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'))
// }
ReactDOM.render(<Booklist/>, document.getElementById('root'))
