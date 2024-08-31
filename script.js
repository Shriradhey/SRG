setInterval(()=>{
const times = document.getElementById('times')
const date = new Date()

const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

const time = `${day}-${month}-${year}  ${hour} : ${min} : ${sec}`;
times.innerHTML = time;

}, 1000)




  const menuToggle = document.getElementById('menu-toggle');
  const menuContainer = document.getElementById('menu-container');

  menuToggle.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
  });
