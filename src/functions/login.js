const url = "http://127.0.0.1:80";

export async function login(username, password) {
  console.log(url + "/login");
  const response = await fetch(url + "/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response.json();
}

export default login;
