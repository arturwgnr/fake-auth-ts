//register
const userRegister = document.getElementById("reg-username");
const userRegisterPassword = document.getElementById("reg-password");
const userRole = document.getElementById("reg-role");
const registerBtn = document.getElementById("register-btn");
//login
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const response = document.getElementById("feedback");
//Banco de dados
const users = [];
//button
registerBtn.addEventListener("click", () => {
  registerUser();
});
//Funcoes: Register, login, isAuthorized
function registerUser() {
  const username = userRegister.value;
  const password = userRegisterPassword.value;
  const role = userRole.value;
  if (username === "" || password === "") return;
  const newUser = {
    id: Date.now(),
    username,
    password,
    role,
  };
  users.push(newUser);
  console.log(newUser);
  console.log(users);
  userRegister.value = "";
  userRegisterPassword.value = "";
  userRole.value = "user";
}
loginBtn.addEventListener("click", () => {
  loginUser();
});
function loginUser() {
  response.innerHTML = "";
  const username = loginUsername.value;
  const password = loginPassword.value;
  if (username === "" || password === "") return;
  const findUser = users.find((user) =>
    user.username === username && user.password === password ? true : false
  );
  if (findUser) {
    const loginResponse = document.createElement("p");
    loginResponse.textContent = "Login Successful!";
    response.appendChild(loginResponse);
    loginResponse.classList = "approved";
    isAuthorized(findUser);
  } else {
    const loginResponse = document.createElement("p");
    loginResponse.textContent = "Invalid Informations! Please try again.";
    response.appendChild(loginResponse);
    loginResponse.classList = "denied";
  }
  loginUsername.value = "";
  loginPassword.value = "";
}
async function isAuthorized(user) {
  if (user.role === "admin") {
    setTimeout(() => {
      console.log("Pai manda em tudo mermo");
    }, 1500);
  } else {
    setTimeout(() => {
      console.log("Nao e o pai...");
    }, 1200);
  }
}
export {};
//# sourceMappingURL=auth.js.map
