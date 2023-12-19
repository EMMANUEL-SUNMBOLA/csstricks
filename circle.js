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
});

let htmlDiv = document.querySelector(".html");
htmlDiv.innerText = `
\b<div class="prog">
\b\b<div class="outer-circle out3">
    \b\b\b<div class="inner-circle in3">
        \b\b\b\b<p><span class="count c30">40</span>%</p>
    \b\b\b</div>
\b\b</div>
\b</div> `;

let scssDiv= document.querySelector(".scss");
scssDiv.innerText = `
\b.outer-circle{
  \b\b\b  outline: 1px solid variables.$lightergray;
  \b\b\b width: 10rem;
  \b\b\b height: 10rem;
  \b\b\b border-radius: 50%;
  \b\b\b display: flex;
  \b\b\b align-items: center;
  \b\b\b justify-content: center;
   \t\b .inner-circle{
    \b\b\b  background-color: variables.$lightergray;
    \b\b\b width: 9rem;
    \b\b\b height: 9rem;
    \b\b\b border-radius: 50%;
    \b\b\b display: flex;
    \b\b\b align-items: center;
    \b\b\b justify-content: center;
    \b\b\b }
    \b\b}`;

    let java = document.querySelector(".java");
    java.innerText = `window.addEventListener("load", ()=>{
        //getElementsByClassName fetches an object of elements with class provided
        \blet outDivs = document.getElementsByClassName('outer-circle');
        \blet counts = document.getElementsByClassName("count");
        // a loop to move the object
        \bfor(let i = 0; i < outDivs.length; i++){
          \b\b\blet iniVal = 0;
            \b\b\blet speed = 30;
            \b\b\blet finalVal = counts[i].textContent;
            // i dont even know about setInterval just use it, no think am.
            \b\blet timer =    setInterval(()=>{
                    \b\b\b\biniVal += 1;
                    // conic gradient ... read more from w3schools or mdn
                    \b\b\b\boutDivs[i].style.background = \`conic-gradient(#16a6b6 \${iniVal/100 * 360}deg, #fff 0deg)\`;
                    \b\b\b\b counts[i].innerText = iniVal;
                    \b\b\bif(iniVal >= finalVal){
                        \b\b\b\bclearInterval(timer);
                        \b\b\b\b}
                        \b\b\b}, speed)
            
        \b}
    });`