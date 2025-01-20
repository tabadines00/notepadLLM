"use client"
import React, { useState } from 'react';
import QuillEditor from '../../components/QuillEditor';

const Notepad = () => {
    const [text, setText] = useState('');

    const handleChange = (value: any, delta: any) => {
        //setText(value);
        console.log(delta)
    };

    // const delt = {
    //     ops: [
    //       { insert: 'Gandalf', attributes: { bold: true } },
    //       { insert: ' the ' },
    //       { insert: 'Grey', attributes: { color: '#cccccc' } }
    //     ]
    //   }

    return (
        <div>
            <h1>Notepad</h1>
            <QuillEditor value={text} onChange={handleChange} />
            <button onClick={() => console.log(text)}>Save</button>
        </div>
    );
};

export default Notepad;
