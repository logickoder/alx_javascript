function setCookies() {
    const firstname = document.getElementById('firstname').value
    const email = document.getElementById('email').value
    document.cookie = `firstname=${firstname}`
    document.cookie = `email=${email}`
}

function showCookies() {
    const cookiesParagraph = document.createElement('p')
    cookiesParagraph.innerText = `Cookies: ${document.cookie}`
    document.body.appendChild(cookiesParagraph)
}