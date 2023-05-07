const body = document.querySelector('body');
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');
const pic5 = document.getElementById('pic5');
const heading = document.querySelectorAll('h1')


pic1.addEventListener('mouseover', () => {
    pic1.style.width = '35%';
    pic2.style.width = '10%';
    pic3.style.width = '10%';
    pic4.style.width = '10%';
    pic5.style.width = '10%';
    heading[0].style.display = 'block'
});
pic1.addEventListener('mouseleave', () => {
    pic1.style.width = '15%';
    pic2.style.width = '15%';
    pic3.style.width = '15%';
    pic4.style.width = '15%';
    pic5.style.width = '15%';
    heading[0].style.display = 'none'
});

pic2.addEventListener('mouseover', () => {
    pic1.style.width = '10%';
    pic2.style.width = '35%';
    pic3.style.width = '10%';
    pic4.style.width = '10%';
    pic5.style.width = '10%';
    heading[1].style.display = 'block'
});
pic2.addEventListener('mouseleave', () => {
    pic1.style.width = '15%';
    pic2.style.width = '15%';
    pic3.style.width = '15%';
    pic4.style.width = '15%';
    pic5.style.width = '15%';
    heading[1].style.display = 'none'
});

pic3.addEventListener('mouseover', () => {
    pic1.style.width = '10%';
    pic2.style.width = '10%';
    pic3.style.width = '35%';
    pic4.style.width = '10%';
    pic5.style.width = '10%';
    heading[2].style.display = 'block'
});
pic3.addEventListener('mouseleave', () => {
    pic1.style.width = '15%';
    pic2.style.width = '15%';
    pic3.style.width = '15%';
    pic4.style.width = '15%';
    pic5.style.width = '15%';
    heading[2].style.display = 'none'
});

pic4.addEventListener('mouseover', () => {
    pic1.style.width = '10%';
    pic2.style.width = '10%';
    pic3.style.width = '10%';
    pic4.style.width = '35%';
    pic5.style.width = '10%';
    heading[3].style.display = 'block'
});
pic4.addEventListener('mouseleave', () => {
    pic1.style.width = '15%';
    pic2.style.width = '15%';
    pic3.style.width = '15%';
    pic4.style.width = '15%';
    pic5.style.width = '15%';
    heading[3].style.display = 'none'
});

pic5.addEventListener('mouseover', () => {
    pic1.style.width = '10%';
    pic2.style.width = '10%';
    pic3.style.width = '10%';
    pic4.style.width = '10%';
    pic5.style.width = '35%';
    heading[4].style.display = 'block'
});
pic5.addEventListener('mouseleave', () => {
    pic1.style.width = '15%';
    pic2.style.width = '15%';
    pic3.style.width = '15%';
    pic4.style.width = '15%';
    pic5.style.width = '15%';
    heading[4].style.display = 'none'
});