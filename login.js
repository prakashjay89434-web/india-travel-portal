// TABS LOGIC
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginTab.addEventListener('click', function() {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});

signupTab.addEventListener('click', function() {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// Admin Credentials
const ADMIN_EMAIL = "admin@indiatravel.com";
const ADMIN_PASSWORD = "admin@123";

// LOGIN LOGIC
document.getElementById('loginBtn').addEventListener('click', function() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const msg = document.getElementById('loginMsg');

  if(email === '' || password === '') {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Please fill all fields!';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Please enter valid email!';
    return;
  }

  if(password.length < 6) {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Password must be 6+ characters!';
    return;
  }

  if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    msg.style.color = '#00c853';
    msg.textContent = '✅ Welcome Admin! Redirecting...';
    sessionStorage.setItem('isAdmin', 'true');
    setTimeout(function() {
      window.location.href = 'admin.html';
    }, 1500);
  } else {
    msg.style.color = '#00c853';
    msg.textContent = '✅ Login Successful! Redirecting...';
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 1500);
  }
});

// SIGNUP LOGIC
document.getElementById('signupBtn').addEventListener('click', function() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const msg = document.getElementById('signupMsg');

  if(name === '' || email === '' || password === '') {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Please fill all fields!';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Please enter valid email!';
    return;
  }

  if(password.length < 6) {
    msg.style.color = '#e94560';
    msg.textContent = '❌ Password must be 6+ characters!';
    return;
  }

  msg.style.color = '#00c853';
  msg.textContent = '✅ Account Created! Please Login.';
  setTimeout(function() {
    loginTab.click();
  }, 1500);
});