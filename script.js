// Changing Jumbotron Image
function changeImage(element) {
    element.setAttribute("src", "assets/picture4.png");
    // element.setAttribute("height", "300")
    element.setAttribute("class", "jumbotron-img2")
}
    function changeImageBack(element) {
    element.setAttribute("src", "assets/picture2.png");
    // element.setAttribute("height", "300")
}



// Form
var btnSubmit = document.querySelector('.submit');
console.log(btnSubmit)
var modal = document.querySelector('.modal-container')

if(btnSubmit){
    btnSubmit.addEventListener('click', function(){
        modal.classList.add('show');

        const next = document.querySelector('.next');
        next.setAttribute('value', 'https://cobee-the-junior-programmer.netlify.app/contact.html');
    })
}

AOS.init();