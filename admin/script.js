function validate(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'cred.json', false)
    xhr.send()
    const response = JSON.parse(xhr.response);
    console.log(response)
    
    const emailIDget = response.users.emailID;
    const passwordGet = response.users.password;

    const email = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;

    if(email == emailIDget && password === passwordGet){
        alert('Login Successfully');
        const name = localStorage.setItem("name", response.users.name)
        const emailadd = localStorage.setItem("emailadd", response.users.emailID)
        const mobilenumber = localStorage.setItem("mobilenumber", response.users.mobile)
        const role = localStorage.setItem("role", response.users.role)
        const photo = localStorage.setItem("profilePic", response.users.profilePic)
        location.href='dashboard.html';
    }else{
        const status = false;
    }
}


