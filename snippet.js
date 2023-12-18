let htmlDiv = document.querySelector(".html");
htmlDiv.innerText = `        <div class="container">
<div class="sub">
    <img src="images/html.svg" alt="">
    <div class="text"><p>html</p></div>
</div>
<div class="sub">
    <img src="images/css.svg" alt="">
    <div class="text"><p>css</p></div>
</div>
<div class="sub">
    <img src="images/php.svg" alt="">
    <div class="text"><p>php</p></div>
</div>
<div class="sub">
    <img src="images/javascript.svg" alt="">
    <div class="text"><p>javascript</p></div>
</div>
</div>`

document.querySelector(".scss").innerText = `    .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    .sub{
        &:hover{
            .text{
                opacity: 1;
            }
        }
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;
        padding: 2rem;
        background-color: gray;
        z-index: 3;
        clip-path: polygon(51% 0, 100% 26%, 100% 76%, 57% 100%, 0 76%, 0 26%);
        outline: 1px solid gray;
        img{
            width: 9rem;
            height: 9rem;
        }
        .text{
            position: absolute;
            // width: 100%;
            height: 100%;
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;   
            background-color:  rgba(22, 166, 180, 0.9);
            transition: all .3s ease-in-out;
            p{
                font-size: 2rem;
                text-transform: uppercase;
                font-weight: 1;
                color: white;
            }
        }
    }
}`;