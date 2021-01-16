import React from "react";
import ReactDom from "react-dom";

import './index.css';

import {data} from './books';
import SpecificBook from './Book';
import {greeting} from './testing/testing'


function BookList() {
      console.log(greeting);

  return (
    <section className='Booklist'>
      {/* <Book img={firstBook.img}
       title={firstBook.title}
        author={firstBook.author}>
      </Book>
      <Book img={secondBook.img} 
      title={secondBook.title} 
      author={secondBook.author}/> */}
      {data.map((book,index)=>{
        // const {img,title,author}= book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
