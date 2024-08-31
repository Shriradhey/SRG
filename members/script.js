const xhr = new XMLHttpRequest();
xhr.open('GET', './members/members.json', false)
xhr.send()
const response = JSON.parse(xhr.response);
console.log(response)

const members = document.querySelector('.members');

response.members.forEach(element => {
    const memberCard = `
    <div class="w-64 h-96 border-2 border-red-500 hover:bg-slate-400 hover:text-black rounded-xl cursor-pointer mx-1 my-2">
        <div class="h-1/2 w-full">
            <img src="${element.memberPic}" title="${element.memberName}(${element.designation})" class="mix-blend-multiply rounded-xl h-full w-full" alt="" srcset="">
        </div>
        <div class="name">
            <p class="text-center font-bold text-2xl">${element.memberName}</p>
        </div>
        <div class="designation">
            <p class="text-center font-medium">${element.designation}</p>
        </div>
    </div>
    `;

members.innerHTML += memberCard;
});