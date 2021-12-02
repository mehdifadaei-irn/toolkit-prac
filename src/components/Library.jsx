import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from "../features/slice/bookSlice";


const Library = () => {

    const dispatch = useDispatch();

    const deleteBookHandle = (id) => {
        dispatch(deleteBook({id:id}))
    }

    const books = useSelector(state => state.books.books)


    return (
        <div className='library'>
            <h2>Library</h2>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Rating</th>
                </tr>
                {books.map(book => <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.rating} eee</td>
                    <td>
                        <button className={"delete"} onClick={() => deleteBookHandle(book.id)}>x</button>
                    </td>
                </tr>)}
            </table>
        </div>
    );
};

export default Library;