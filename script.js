const typeScript = ['Wira Pratama'];
let count = 0;
let typeIndex = 0;
let currentType = '';
let letters ='';

(function typing() {
    if (count == typeScript.length) {
        count = 0;
    }
    currentType = typeScript[count];
    letters = currentType.slice(0, ++typeIndex);
    document.querySelector('.typing-text').textContent = letters;
    if (letters.length == currentType.length) {
        typeIndex = 0;
    }
    setTimeout(typing, 500)
})();