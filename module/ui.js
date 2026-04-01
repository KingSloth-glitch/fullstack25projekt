const renderUsers = users => {
    const listElement = document.getElementById('user-list')

    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = `${user.name} - ${user.role}`
        listElement.appendChild(li)
    })
}

export default renderUsers