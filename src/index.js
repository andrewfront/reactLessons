import React from 'react'
import ReactDOM from 'react-dom'
//css

import './index.css'

//setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  title: 'Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81QOQobJiGL._AC_UL604_SR604,400_.jpg',
  title: 'The Big Book of Silly Jokes for Kids',
  author: 'Carole P. Roman'
}
// const title = 'Love You to the Moon and Back'
// const author = 'Amelia Hepworth'
// const img = 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg'

// function Greeting() {
//   return <h4>This is Andrew and this is my first component</h4>
// }
function Booklist() {
  return (
    <section className='booklist'>
      <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam odio ea praesentium nulla voluptates provident corrupti quidem officia numquam iste.
          </p>
      </Book>
      <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
    </section>
  )
}
function Book({img, title, author, children}) {
  return <article className='book'>
    {/* <Image/>
    <Title/>
    <Author/> */}
    <img className='image' src={img} alt="moon" />
    <h1>{title}</h1>
    <h4 className='heading'>{author}</h4>
    {children}
    {/* <h4 className='heading' style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>{firstBook.author.toUpperCase()}</h4> */}

    </article>
}
// function Book(props) {
//   const {img, title, author} = props
//   return <article className='book'>
//     {/* <Image/>
//     <Title/>
//     <Author/> */}
//     <img className='image' src={img} alt="moon" />
//     <h1>{title}</h1>
//     <h4 className='heading'>{author}</h4>
//     {/* <h4 className='heading' style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>{firstBook.author.toUpperCase()}</h4> */}

//     </article>
// }
// function Book(props) {
//   return <article className='book'>
//     {/* <Image/>
//     <Title/>
//     <Author/> */}
//     <img className='image' src={props.img} alt="moon" />
//     <h1>{props.title}</h1>
//     <h4 className='heading'>{props.author}</h4>
//     {/* <h4 className='heading' style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>{firstBook.author.toUpperCase()}</h4> */}

//     </article>
// }
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
