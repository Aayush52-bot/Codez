const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); //


  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'Aayush Songoji' && password === 'Aayush2004')
	{
    
    window.location.href = "Main.html"; 
  } else {
    alert('Invalid username or password!');
  }
});
