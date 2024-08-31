const name = localStorage.getItem("name")
const emailadd = localStorage.getItem("emailadd")
const mobilenumber = localStorage.getItem("mobilenumber")
const role = localStorage.getItem("role")
const photo = localStorage.getItem("profilePic")

const displayName = document.getElementById('user')
displayName.innerText = name;
const displayPhoto = document.getElementById('profilePicImg')
displayPhoto.src = photo;
displayPhoto.setAttribute("title", `${name}(${role})`)

const xhr = new XMLHttpRequest();
xhr.open('GET', '../members/members.json', false)
xhr.send()
const response = JSON.parse(xhr.response)
console.log(response)



response.members.forEach(element => {
    const allMembers = document.querySelector('#allMembers');
    allMembers.innerHTML +=
    `<tr class="hover:bg-red-700 cursor-pointer hover:text-white">
                <td class="text-center padding-2 border border-slate-700">${element.memberId}</td>
                <td class="text-center padding-2 border border-slate-700">${element.memberName}</td>
                <td class="text-center padding-2 border border-slate-700">${element.designation}</td>
                <td class="text-center padding-2 border border-slate-700 flex justify-center"><img src="../${element.memberPic}" title="${element.memberName}(${element.designation})" style="border-radius: 50%; height: 50px; width: 50px;" alt="Bijender Kumar(President)"></td>
              </tr>`;
});

