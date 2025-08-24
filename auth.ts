//register
const userRegister = document.getElementById('reg-username') as HTMLInputElement;
const userRegisterPassword = document.getElementById('reg-password') as HTMLInputElement;
const userRole = document.getElementById('reg-role') as HTMLSelectElement
const registerBtn = document.getElementById('register-btn') as HTMLButtonElement;

//login
const loginUsername = document.getElementById('login-username') as HTMLInputElement;
const loginPassword = document.getElementById('login-password') as HTMLInputElement;
const loginBtn = document.getElementById('login-btn') as HTMLButtonElement;
const response = document.getElementById('feedback') as HTMLDivElement;

//Banco de dados
const users: User[] = [];


//🔐 Auth Manager – Simulação de Login
// Criar interface para objeto 

interface User {
  id: number,
  username: string,
  password: string,
  role: Role,
}

// Criar types pra selecionar valores pre-determinados
type Role = 'admin' | "user"

//button
registerBtn.addEventListener('click', () => {
  registerUser()

})

//Funcoes: Register, login, isAuthorized
function registerUser() {
  const username = userRegister.value;
  const password = userRegisterPassword.value;
  const role = userRole.value as Role;

  if(username === '' || password=== '') return;

  const newUser: User = {
    id: Date.now(),
    username,
    password,
    role,
  }

    users.push(newUser)
    console.log(newUser);
    console.log(users);
    

  userRegister.value = ''
  userRegisterPassword.value = ''
  userRole.value = 'user'
}

loginBtn.addEventListener('click', () => {
  loginUser()
})

function loginUser() {
  response.innerHTML = "";

  const username = loginUsername.value;
  const password = loginPassword.value;

  if(username === '' || password=== '') return;

const findUser =  users.find((user) => user.username === username && user.password === password ? true : false);

if(findUser) {
  const loginResponse = document.createElement('p');
   loginResponse.textContent = 'Login Successful!';
  response.appendChild(loginResponse)
  loginResponse.classList = 'approved'

   isAuthorized(findUser)
} else {
    const loginResponse = document.createElement('p');
   loginResponse.textContent = 'Access denied!!!!! 😡';
  response.appendChild(loginResponse)
  loginResponse.classList = 'denied'

    setTimeout(() => {
      console.log('Nao e o pai...')
    }, 1800);
} 

  loginUsername.value = '';
  loginPassword.value = '';
}

async function isAuthorized(user: User) {
  if(user.role === 'admin') {

    setTimeout(() => {
      console.log('Pai manda em tudo mermo')
    }, 1500);
    
  } else {
      setTimeout(() => {
      console.log('Nao e o pai...')
    }, 1200);
  }
}