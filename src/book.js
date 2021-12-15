import React from 'react'
function Book({img, title, author}) {
    const clickHandler = () => {
    alert('hello world')
    }
    const complexExample = () => {
    console.log(author)
    }
    return <article className='book' onMouseOver={() => {
    console.log(title)
    }}>
    <img className='image' src={img} alt="moon" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4 className='heading'>{author}</h4>
    <button type='button' onClick={clickHandler}>Click me</button>
    <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
}
export default Book
