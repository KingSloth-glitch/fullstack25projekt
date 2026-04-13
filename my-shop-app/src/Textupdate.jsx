import {useState} from 'react';

function DynamicTextUpdater() {
    const [title, setTitle] = useState('');

    return (
        <div>
            <h1>{title}</h1>

            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="skriv en titel här"
            />
        </div>
    );
}

export default DynamicTextUpdater;