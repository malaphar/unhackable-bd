// Function to POST new message
sendMessage = async () => {
  const messageData = document.getElementById('message-text').value
  const request = fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: messageData})
  }).then(response => {
    if(response.ok) {
      console.log("Message sent")
    } else {
      console.error("Message not created")
    }
  })
}

// Event listeners
document.getElementById('contact-modal').addEventListener('shown.bs.modal', () => {
  document.getElementById('message-text').focus()
})
document.getElementById('msg-modal-submit').addEventListener('click', sendMessage)
