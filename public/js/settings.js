const hookUrlElem = document.querySelector('#hook-url')
const adminUserNameElem = document.querySelector('#admin-username')
const adminUserPassword = document.querySelector('#admin-pass')

// Gets current configured Hook URL and Admin username
getCurrent = async () => {
    const resp = await fetch('/api/settings').then(response => {return response.json()})
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
        body: JSON.stringify({ url: hookUrlElem.value, admin_pass: adminUserPassword, userName: adminUserNameElem.value})
    }).then(response => {
        if(response.ok){
            return response.text()
        } else {
            return response.text()
        }
    })
}

// Saves settings and runs test
saveSettings = async(e) => {
    // Error check blank values 
    if(hookUrlElem.value.length <= 0 ||adminUserNameElem.value.length <= 0){
        alert(`Values for URL or username cannot be blank`)
        return
    }

    // If no password added dont save blank pass
    let bodyContent = ""
    if(adminUserPassword.value.length > 0) {
        bodyContent = JSON.stringify({auth_url:hookUrlElem.value, admin_pass: adminUserPassword.value,admin_username: adminUserNameElem.value})
    } else {
        bodyContent = JSON.stringify({auth_url:hookUrlElem.value,admin_username: adminUserNameElem.value})
    }

    e.preventDefault()
    testConn(e)
    const saveR = await fetch('/api/settings', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: bodyContent
    })

}

// Event Listeners
document.querySelector('#test-con-btn').addEventListener('click', testConn)
document.querySelector('#settings-form').addEventListener('submit', saveSettings)

// Func to run on load
getCurrent()