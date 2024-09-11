const xhr = new XMLHttpRequest();
xhr.open('GET', 'gallery/gallery.json', false)
xhr.send()
const response = JSON.parse(xhr.response)
const photo = response.photos;

photo.forEach(element => {
    const images = document.querySelector('.images')
    const card = `
    <div class="relative ml-2 mr-2 mt-2 mb-2" id="image">
        <div class="img">
            <a href="${element.url}" target="_blank"><img class="h-56 cursor-pointer w-80 border-2 border-red-600 rounded-md" src="${element.url}" alt=""></a>
        </div>
        <div class="absolute bottom-0 left-0">
            <div class="title">
                <p class="text-white font-bold ml-2 mb-2">${element.title}</p>
            </div>
            <div class="date">
                <p class="text-white font-bold ml-2 mb-2">${element.date}</p>  
            </div>
        </div>
    </div>
    `;
    images.innerHTML += card;

    
});

const photo = response1.videos;

videos.forEach(element => {
    const videos = document.querySelector('.videos')
    const card = `
    <div class="relative ml-2 mr-2 mt-2 mb-2" id="videos">
        <div class="img">
            <a href="${element.url}" target="_blank"><iframe class="h-56 cursor-pointer w-80 border-2 border-red-600 rounded-md" src="${element.url}" alt=""></a>
        </div>
        <div class="absolute bottom-0 left-0">
            <div class="title">
                <p class="text-white font-bold ml-2 mb-2">${element.title}</p>
            </div>
            <div class="date">
                <p class="text-white font-bold ml-2 mb-2">${element.date}</p>  
            </div>
        </div>
    </div>
    `;
    videos.innerHTML += card;

    
});





// function showPopup(){
//     const popup = document.querySelector('.popup');
//     popup.style.display ='block';
//     const popupImage=`
//     <div class="w-3/6 m-auto flex justify-center items-center flex-col bg-slate-200 rounded-2xl p-8">
//         <div>
//             <i class="bx bx-x-circle text-black text-2xl cursor-pointer" title="Close"></i>
//         </div>
//         <div class="image">
//             <img class="h-2/3" src="${photo.url}" alt="">
//         </div>
//         <div class="title">
//             <p class="text-black font-bold ml-2 mb-2">${photo.title}</p>
//         </div>
//         <div class="date">
//             <p class="text-black font-bold ml-2 mb-2">${photo.date}</p>  
//         </div>
//     </div>`;
//     popup.innerHTML = popupImage;
// }
