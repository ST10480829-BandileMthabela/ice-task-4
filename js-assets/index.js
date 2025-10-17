const firstImage = document.querySelector('.first');
const secondImage = document.querySelector('.second');
const thirdImage = document.querySelector('.third');
const fourthImage = document.querySelector('.fourth');


function resetWidths() {
    firstImage.style.width = '200px';
    secondImage.style.width = '200px';
    thirdImage.style.width = '200px';
    fourthImage.style.width = '200px';
}

function first_width() {
    resetWidths();
    firstImage.style.width = '700px';
}

function second_width() {
    resetWidths();
    secondImage.style.width = '700px';
}   

function third_width() {
    resetWidths();
    thirdImage.style.width = '700px';
}

function fourth_width() {
    resetWidths();
    fourthImage.style.width = '700px';
}

// the image gets larger if the user hovers over the image linked in the html file.
firstImage.addEventListener('mouseenter', first_width);
firstImage.addEventListener('mouseleave', resetWidths);

secondImage.addEventListener('mouseenter', second_width);
secondImage.addEventListener('mouseleave', resetWidths);

thirdImage.addEventListener('mouseenter', third_width);
thirdImage.addEventListener('mouseleave', resetWidths);

fourthImage.addEventListener('mouseenter', fourth_width);
fourthImage.addEventListener('mouseleave', resetWidths);



