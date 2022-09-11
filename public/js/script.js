// Checks URL for ?user_id=#
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const userId = urlParams.get('user_id')

// Gets current Users Id if no param
getUserId = async () => {
    const user_id = await fetch('/api/users/userId', {
        credentials: 'include'
    }).then(response => response.json()).then(data => {
        return data.user_id
    })
    // Hacky way to add URL param for easier idor 
    if(user_id > 0) {
        window.location.href = `/u/dashboard?user_id=${user_id}`
    } else {
        // avoids redirect loop
        window.location.href = `/u/dashboard?user_id=null`
    }
    return
}

// Pulls trade data from API - This is IDOR location 
getTrades = async() => {
    const tradesData = await fetch(`/api/trades/${userId}`, {credentials:'include'}).then(response => response.json()).then(data => {
        return data
    })
    return tradesData
}

// Writes the trade data to DOM
writeTradesData = async() => {    
    const trades = await getTrades()
    const tableElem = document.querySelector('#trades-table')
    if(!trades){
        tableElem.innerText = "No trades found for the current user"
    } else {
        // Iterates trough trade data creating elements
        let id = 1
        trades.forEach(element => {
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            // Set content of table
            th.textContent = id
            td.textContent = element.trade_name
            td2.textContent = element.amount
            // Write the table
            tableElem.appendChild(tr)
            tr.appendChild(th)
            tr.appendChild(td)
            tr.appendChild(td2)
            id++
        });
    }
}


// Gets Messages from API and writes to DOM
getMessage = async () => {
    const msgContElem = document.querySelector('#messages-container')
    const msgs = await fetch('/api/messages', {credentials:'include'}).then(response => response.json()).then(data => {
        return data
    })
    // Reset for polling
    msgContElem.innerHTML = ""
    if(msgs.length > 0){
        msgs.forEach(m => {
            const p = document.createElement('p')
            // XSS here due to HTML node instead of txt textContent is correct way
            p.innerHTML = m.message
            p.classList.add('fs-6')
            msgContElem.appendChild(p)
        });
    }else {
        console.warn('No messages found')
    }
    return msgs  
}


// Checks to ensure user id is a URL param
if(userId) {
    null
} else {
    getUserId()
}


// Calls write func once on load then pulls for new messages
setInterval(getMessage, 8000);
(async()=> {
    writeTradesData()
    getMessage()
})();



