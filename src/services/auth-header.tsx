export default function authHeader() {
  const KEY = "ZjExMzcwYWYtY2NhZi00MzJhLThlZmQtNjU3MGRiNGRhMjU0";
  const userStr = localStorage.getItem("tokens");
  let user = null;
  if (userStr)
    user = JSON.parse(userStr);
  if (user) {
    //  return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KEY}`
    }
  } else {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer `
    };
  }
}