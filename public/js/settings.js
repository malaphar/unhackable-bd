const hookUrlElem = document.querySelector('#hook-url')
const adminUserNameElem = document.querySelector('#admin-username')

// Gets current configured Hook URL and Admin username
getCurrent = async () => {
    const resp = await fetch('/api/settings').then(response => {return response.json()})
    console.log(resp[0].auth_url)
    if(resp[0].auth_url) {
        hookUrlElem.value = resp[0].auth_url
    }
    if(resp[0].admin_username){
        document.querySelector('#admin-username').value = resp[0].admin_username
    }
    return
}

// Test Connection *SSRF lives here*
testConn = async(e) => {
    e.preventDefault()
    const testResp = await fetch('/api/settings/test', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url: hookUrlElem.value, userName: adminUserNameElem.value})
    }).then(response => {
        if(response.ok){
            return response.text()
        } else {
            return response.text()
        }
    })
    console.log(testResp)
}

// Event Listeners
document.querySelector('#test-con-btn').addEventListener('click', testConn)

// Func to run on load
getCurrent()