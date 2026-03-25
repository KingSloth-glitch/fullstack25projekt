const fetchUsers = async () => {
    try {
        const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
            method: 'GET',
            headers: {
                'x-api-key': "elev-hemlighet-2026",
                'content-type': 'application/json',
            },
        });


if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
}

const users = await response.json()
const userList = document.getElementById('userList');
innerHeight.HTML = '';
users.forEach (user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.role})`;
    userList.appendChild(li);
})
    }
 catch (error) {
        console.error('There was a problem with the fetch operation:', error);
 }
};



   