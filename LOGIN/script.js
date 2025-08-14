document.addEventListener('mousemove', (e) => {
  const pupils = document.querySelectorAll('.pupil');

  pupils.forEach(pupil => {
    const rect = pupil.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const x = Math.cos(angle) * 6; // Horizontal movement
    const y = Math.sin(angle) * 6; // Vertical movement

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});


function showRegister() {
  const loginBox = document.getElementById('login-box');
  const registerBox = document.getElementById('register-box');
  loginBox.classList.add('hidden');
  registerBox.classList.remove('hidden');
  registerBox.classList.remove('fade');
  void registerBox.offsetWidth; 
  registerBox.classList.add('fade');
}

function showLogin() {
  const loginBox = document.getElementById('login-box');
  const registerBox = document.getElementById('register-box');
  registerBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
  loginBox.classList.remove('fade');
  void loginBox.offsetWidth; 
  loginBox.classList.add('fade');
}

function showRegister() {
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('register-box').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('register-box').classList.add('hidden');
  document.getElementById('login-box').classList.remove('hidden');
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (!email || !password) {
    alert('Please fill in both fields.');
  } else {
    alert(`Logged in as ${email}`);
  }
}

function register() {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  if (!name || !email || !password) {
    alert('Please fill in all fields.');
  } else {
    alert(`Registered successfully as ${name}`);
    showLogin();
  }
}

