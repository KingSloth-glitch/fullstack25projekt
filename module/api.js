const fetchUsers = async () => {
    try {
        const res = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
            method: 'GET',
            headers: {
                'x-api-key': 'elev-hemlighet-2026',
                'content-type': 'application/json',
            },
    })

    if (!res.ok) {
        throw new Error('fetchen misslyckades')
    }
    const data = await res.json()
    return data
    } catch (error) {
        console.error('något gick snett: ', error)
    }
}

export default fetchUsers