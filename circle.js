window.addEventListener("load", ()=>{
    //getElementsByClassName fetches an object of elements with class provided
    let outDivs = document.getElementsByClassName('outer-circle');
    let counts = document.getElementsByClassName("count");
    // a loop to move the object
    for(let i = 0; i < outDivs.length; i++){
        let iniVal = 0;
        let speed = 30;
        let finalVal = counts[i].textContent;
        // i dont even know about setInterval just use it, no think am.
        let timer =    setInterval(()=>{
                iniVal += 1;
                // conic gradient ... read more from w3schools or mdn
                outDivs[i].style.background = `conic-gradient(#16a6b6 ${iniVal/100 * 360}deg, #fff 0deg)`;
                counts[i].innerText = iniVal;
                if(iniVal >= finalVal){
                    clearInterval(timer);
                }
            }, speed)
        
    }
})