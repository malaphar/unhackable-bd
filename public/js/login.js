const loginFormHandler = async (event) => {
  event.preventDefault();

  // const email = document.querySelector('#email-login').value.trim();
  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect on login success
      document.location.replace('/u/dashboard');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
