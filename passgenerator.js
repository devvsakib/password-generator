const btn = document.getElementById('genBtn'),
    showPass = document.getElementById('passwords'),
    charLen = document.getElementById('charLen'),
    inpRange = document.getElementById('range')
const passGenFunc = () => {
    const ltr = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Pass lenth
    const ltrsize = (ltr.length) - 1;
    inpRange.oninput = () => {
        charLen.textContent = inpRange.value
        // console.log(inpRange.value)
    }
    let chr = inpRange.value
    let pass = [];
    if (chr > 7) {
        for (let i = 0; i < chr; i++) {
        const rndNumber = Math.floor(Math.random() * ltrsize);
            // ltr[rndNumber]
            let passs = ltr[rndNumber]
            let fn = pass += passs
            showPass.innerHTML = fn
            charLen.innerHTML = fn.length
    
        }
    }
    else[
        alert('Character Length greater than 8')
    ]

}
window.addEventListener('load', passGenFunc)
btn.addEventListener('click', passGenFunc)