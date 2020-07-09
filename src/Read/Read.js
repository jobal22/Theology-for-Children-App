import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import Chapters from '../Chapters/Chapters';
import {findBook, findChaptersinBook} from '../helpers';
import './Read.css';

export default class Read extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = TCContext;
render() {
    const props = this.props
    const { books, chapters, verses, plantitles, plans } = this.context;
    const {bookId} = this.props.match.params.bookId;
    const b = findBook (books, bookId) || {}
    const chapter = chapters.filter(chapter=>bookId === chapter.bookId)
    const chapterId = chapter.map(c=> c.id)
    // const verse = verses.filter(verse=>chapterId === verse.chapterid)
    // const v = verses.filter(verse=> verse.includes(1)).map(v1=>v)
    // const verse = verses.filter(verse=> verse.chapterid === 1).map(v1=>v1)
    // console.log('this is props', v)
    return (
      <div>
        <section>
        {books.map(book=>
          <h2 key={book.id}>{book.name}</h2>)}
        </section>
        {/* {chapter.map(chp=>
        <section>
          <h3 key={chp.id}>{chp.name}</h3>
        </section>)} */}
        <section>
          {chapter.map(c=>
            <Chapters 
              key={c.id}
              id={c.id}
              name={c.name}
              // verse={verses.filter(v=>v.chapterid === chapterId)}
              verse = {verses.filter(verse=> verse.chapterid === c.id).map(v1=>v1)}

            />)}
        </section>  
        {/* {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName} */}
        {/* {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li> */}
      </div>
    )
  }
}


// import React, { Component } from 'react';
// import TCContext from '../Context/TCContext';
// import Chapters from '../Chapters/Chapters';
// import Verses from '../Verses/Verses';
// import {findBook, findVerse} from '../helpers';
// import './Read.css';

// export default class Read extends Component {
//   static defaultProps = {
//     match: {
//       params: {}
//     }
//   }

//   state = {
//     bookId: this.props.match.params,
//     book: {},
//     chapter: {},
//     ...this.context
//   }

//   static contextType = TCContext;

//   componentDidMount() {
//     const { books, chapters, verses } = this.context
//     const {bookId} = this.state
//     const book = findBook (books, bookId) || {}
//     const chapter = chapters.filter(c=>{
//       return c.bookid === bookId.bookId
//       // console.log('Audax is helping', c.bookid, bookId.bookId)
//     });
//     this.setState({book, chapter})
//   }

//   render() {
//     const { books, chapters, verses } = this.context
//     const {book, chapter} = this.state;
//     let renderChapters = () => {
//       if (chapters.length > 0){
//         return (
//           <div>
//           {chapters.map(chapter =>
//             <div key={chapter.id}>
//             <Chapters 
//               key={chapter.id}
//               id={chapter.id}
//               name={chapter.name}
//               bookId={chapter.bookId}
//               book={chapter}
//               verses={verses.filter(verse =>
//                 verse.chapterId == chapter.id)}
//             />
//             </div>
//           )}
//           </div>
//         )
//       }
//     }

//     return (
//       <div>
//         <section>
//           <h1>{book.name}</h1>
//         </section>
//         <section>
//           {renderChapters()}
//           </section>
//       </div>
//     )
//   }
// }
