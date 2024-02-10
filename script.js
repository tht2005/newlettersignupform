const myForm = document.querySelector('form');
const frame = document.getElementById('frame');
const thankFrame = document.getElementById('fin-frame');

myForm.addEventListener('submit', () => {
    const email = myForm['email'].value;
    frame.style.display = 'none';
    thankFrame.style.display = 'flex';
    thankFrame.querySelector('span').innerText = email;
});
myForm['email'].addEventListener('invalid', () => {
    myForm['email'].style.border = "1px solid hsl(358, 79%, 66%)";
    myForm['email'].style.background = "hsl(357, 100%, 86%)";
    document.querySelector('#wrongMsg').style.display = 'block';
}, true);


thankFrame.querySelector('button').onclick = () => {
    myForm['email'].value = '';
    frame.style.display = 'flex';
    thankFrame.style.display = 'none';
    myForm['email'].style.border = "1px solid hsl(239, 57%, 85%)";
    myForm['email'].style.background = "none";
    document.querySelector('#wrongMsg').style.display = 'none';
};
