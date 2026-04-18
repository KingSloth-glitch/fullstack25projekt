import {useState} from 'react';

function InteractiveList() {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        {id: 1, name: "soup", description: "A warm soup made with hate"},
        {id: 2, name: "salad", description: "A fresh salad made with love"},
        {id: 3, name: "steak", description: "A juicy steak made with care"},
    ];

    return (
        <div>
            <h2>lista med mat</h2>

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => setSelectedItem(item)} >
                            visa mer
                        </button>
                    </li>
                ))}
            </ul>

            {selectedItem && (
                <div>
                    <h3>{selectedItem.name}</h3>
                    <p>{selectedItem.description}</p>
                </div>
            )}
        </div>
    );
}

export default InteractiveList;