
searchDb = async(e) => {
    e.preventDefault()
    const searchParam = document.querySelector('#search-input').value
    const r = await fetch(`/search?search=${searchParam}`).then(response => {
        if(response.ok) {
            return response.text()
        } else {
            throw Error(`Unable to query database`) 
        }
    }).catch(e => {
        console.error(e)
    })
    // For now just generic alert as this exists only to be injected
    alert(r)
}

document.querySelector('#search-form').addEventListener('submit', searchDb)