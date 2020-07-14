const testmonials = [
    {
        text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        profission: 'UX Engineer',
        photo: './images/image-tanya.jpg'
    },
    {
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        profission: 'Junior Front-end Developer',
        photo: '/images/image-john.jpg'
    }
]

let photo = document.querySelector('.photo');
let text = document.querySelector('.text-depoiment');
let profission = document.querySelector('.job');
let name = document.querySelector('.name');
let index = 0

document.addEventListener("DOMContentLoaded", function(){
    photo.src = testmonials[index].photo;
    text.innerHTML = testmonials[index].text;
    name.innerHTML = testmonials[index].name;
    profission.innerHTML = testmonials[index].profission;
})

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.onclick = verifyIndex
next.onclick = verifyIndex

function verifyIndex() {
    if(index === 0){
        changeIndex(1);
        index = 1
    } else {
        changeIndex(0);
        index = 0;
    }
}

function changeIndex(index) {
    photo.src = testmonials[index].photo;
    text.innerHTML = testmonials[index].text;
    name.innerHTML = testmonials[index].name;
    profission.innerHTML = testmonials[index].profission;
}