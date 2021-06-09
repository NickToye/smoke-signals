import React, { useState } from 'react';
// import cx from 'classnames';

function App() {
    // const [toggle, setToggle] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Array<string>>([]);

    // const buttonClasses = cx({
    //     'bg-red-500 hover:bg-red-500': !toggle,
    //     'bg-blue-500 hover:bg-blue-500': toggle,
    // });

    const submit = (e: string) => {
        setMessage('');
        setMessages([...messages, e]);
    };

    return (
        <div className='bg-grey-500 flex flex-col items-center justify-center h-screen'>
            {/* <button
                className={`p-3 rounded-sm ${buttonClasses}`}
                onClick={() => setToggle(!toggle)}
            >
                Smoke Signals
            </button> */}
            <div className='bg-black-100 p-2'>
                <input
                    type='text'
                    className='form-input px-4 py-3 rounded'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='bg-red-500 p-3 rounded'
                    onClick={() => submit(message)}
                >
                    Send
                </button>
            </div>
            <div className='p-5'>
                {messages.map((e, i) => {
                    return <div key={i}>{e}</div>;
                })}
            </div>
        </div>
    );
}

export default App;
