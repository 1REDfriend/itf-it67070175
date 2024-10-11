let num = 1
document.getElementById("b-username").addEventListener('click', (e) => {
    const username = document.getElementById("username").value
    const text_username = document.getElementById("t-username")
    text_username.innerHTML = username + " Tom&jerry"
})

document.getElementById("b-url").addEventListener('click', ()=> {
    const url = document.getElementById("url").value
    const avatar = document.getElementById("t-url")
    avatar.style.backgroundImage = "url('" + url + "')"
})

document.getElementById("b-phone").addEventListener('click', () => {
    num++
    const name = document.getElementById("p-name").value
    const number = document.getElementById("p-number").value
    const tb_phone = document.getElementById("tb-phone")
    tb_phone.innerHTML += `
        <tr>
            <td>${num}</td>
            <td>${name}</td>
            <td>${number}</td>
        </tr>`;
    
    document.getElementById("p-name").value = '';
    document.getElementById("p-number").value = '';
})