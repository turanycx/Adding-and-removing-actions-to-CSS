const change = document.querySelector('p');
console.log(change.classList);




change.classList.add('can');
change.classList.remove('error');










const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(can => {
    if (can.textContent.includes('error')) 
    {
        can.classList.add('error');
    }

    if (can.textContent.includes('success')) {
        can.classList.add('success');
    }

});