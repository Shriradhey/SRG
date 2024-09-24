const form = document.querySelector("#donationsLoginForm")
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let username = document.getElementById('key').value;
    let password = document.getElementById('secret').value;

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.razorpay.com/v1/payments')
    let auth = window.btoa(username +':'+password)
    xhr.setRequestHeader('Authorization','Basic '+auth)
    xhr.send()

    xhr.onload = () =>{
        if(xhr.status ==200){
            document.getElementById('data').innerHTML = xhr.response
        }
    }
    console.log(xhr)


})
