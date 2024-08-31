const table = document.querySelector('table');

const xhr = new XMLHttpRequest()
xhr.open('GET', 'mission/mission.json', false)
xhr.send()
console.log(xhr)
const response = JSON.parse(xhr.response)
const data = response.objectives

data.forEach(element => {
    table.innerHTML += `
    <tr class="border-2 border-red-500 w-full hover:bg-red-500 hover:border-white hover:text-white cursor-pointer">
        <td class="border-2 border-red-500 p-2"><p>${element.sNo}</p></td>
        <td class="border-2 border-red-500 p-2"><p>${element.value}</p></td>
    </tr>`;
});