import {useEffect, useState} from 'react'

function User() {
    const [clickToFetch, setClickToFetch] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
                    method: 'GET',
                    headers: {
                        "x-api-key": "elev-hemlighet-2026",
                        "Content-Type": "application/json"
                    },
                }
            );

            if (!response.ok) {
                throw new Error('network response was not ok');
            }
             const data = await response.json();
             const filterData = data.filter(user => user.role === 'pilot');

             setUsers(filterData);

        console.log(filterData);
            } catch (error) {
            console.error('Error fetching data:', error);
            
        } 
        }
       

        fetchData();
        
    } , [clickToFetch]);

    return (
        <div>
            <h2>User component</h2>
            <button onClick={() => setClickToFetch(!clickToFetch)}>
                Fetch data
            </button>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - <strong>{user.role}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;