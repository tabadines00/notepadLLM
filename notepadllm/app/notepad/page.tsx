"use client"
import React, { useState } from 'react';
import QuillEditor from '../../components/QuillEditor';

const Notepad = () => {
    const [text, setText] = useState('');

    const handleChange = (value: string) => {
        setText(value);
    };

    return (
        <div>
            <h1>Notepad</h1>
            <QuillEditor value={text} onChange={handleChange} />
            <button onClick={() => console.log(text)}>Save</button>
        </div>
    );
};

export default Notepad;
