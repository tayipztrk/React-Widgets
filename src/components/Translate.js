import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const optinos = [
    {
        label: 'Turkish',
        value: 'tr',
      },
      {
        label: 'Arabic',
        value: 'ar',
      },
      {
        label: 'Hindi',
        value: 'hi',
      },
      {
        label: 'Dutch',
        value: 'nl',
      },
];

const Translate = () => {
    const [language, setLanguage] = useState(optinos[0])
    const [text, setText] = useState('')

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={optinos}
            />
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate