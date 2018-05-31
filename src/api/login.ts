export function signIn(login, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === "user" && password === "user") {
        resolve({ token: "usertoken", has2Factor: false });
      }
      if (login === "admin" && password === "admin") {
        resolve({ has2Factor: true });
      }
    }, Math.random() * 1500);
    reject({ error: "CREDENTIALS_INCORRECT" });
  });
}
