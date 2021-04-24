var list = document.querySelectorAll('#book-list li .name');
list.forEach(function (book) {
    book.textContent += ' (book title)';
});

var bookList = document.querySelector('#book-list');

const banner = document.querySelector('#page-banner');
const clonedBan = banner.cloneNode(false);
//console.log(bookList.previousElementSibling);

function fadeInAndOut(thz) {
    var elmt = thz.nextElementSibling;
    elmt.classList.toggle("aPanelHidden");
}

//Delete function
var btns = document.querySelectorAll('#book-list .delete');
btns.forEach(function (b) {
    b.addEventListener('click', function (event) {
        alert('Delete this book?');
        const li = event.target.parentElement;
        li.style.opacity=0;
        li.style.display = 'none';
        
    })
});


//Hide Checkbox
// var chkbtn = document.querySelector('#wrapper .checker');
// chkbtn.addEventListener('change', function (e) {
//     if (chkbtn.checked == true) {
//         bookList.style.display = 'none';
        
//     } else {
//         bookList.style.display = 'initial';
//     }
// });



const aForm = document.forms['add-book'];
aForm.addEventListener('submit', function (e) {
    e.preventDefault();
var textss = aForm.querySelector('input[type="text"]').value;

//create elements
    const li = document.createElement('li');
    const myTxt = document.createElement('span');
    const myBtn = document.createElement('span');

//add content
    myBtn.textContent='delete';
    myTxt.textContent=textss;

    myBtn.classList.add('delete');
    myTxt.classList.add('name');

    li.appendChild(myTxt);
    li.appendChild(myBtn);
    
    bookList.querySelector('ul').appendChild(li);

    var aa = document.querySelector('#add-book input[type="text"]');
    aa.value = '';

    
    /*var btns = document.querySelectorAll('#book-list .delete');
    btns.forEach(function (b) {
        b.addEventListener('click', function (event) {
            const li = event.target.parentElement;
            li.style.display = 'none';

        })
    });*/


});


