const form = document.getElementById("donationsLoginForm")
// const btn = document.querySelector('#show')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let username = document.getElementById('key').value;
    let password = document.getElementById('secret').value;

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.razorpay.com/v1/payments/', true, username, password)

    // let auth = window.btoa(username +':'+password)
    // xhr.setRequestHeader('Authorization','Basic '+auth)


    xhr.onload = () =>{
        if(xhr.status ==200){
            document.getElementById('data').innerHTML = xhr.response
        }
    }

    xhr.send()
    console.log(xhr)


})
