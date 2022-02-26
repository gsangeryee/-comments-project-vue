// Check Local Storage for user item.
// Return HTTP Authorization header with Bearer token, 
// if there is a user logged in and their token is valid.
// Otherwise, return an empty object.
export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.acessToken) {
        return { Authorization: 'Bearer ' + user.acessToken }; // for Spring Boot back-end
    } else {
        return {};
    }
}