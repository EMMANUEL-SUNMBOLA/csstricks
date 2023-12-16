let out = document.querySelector('.inner-circle');

window.addEventListener('load', ()=>{
    inner.foreach(item=>{
        let count = document.querySelector('.count');
        let InitialValue = 0;
        let finalValue = count.innerText;
        let speed = 30;

        let timer = setInterval(()=>{
            InitialValue += 1;
            out.computedStyleMap.background = `conic-gradient(#16a6b6 ${InitialValue/100 *360}deg, #fff 0deg)`;
            count.innerHTML = InitialValue;
            if(InitialValue >= finaleValue){
                clearInterval(timer);
              }
        }, speed);
        
        // alert();
    })
})