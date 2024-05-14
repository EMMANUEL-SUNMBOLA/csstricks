let nav = document.querySelector('nav');
nav.innerHTML = `    <nav>
<div class="left">
    <div class="brand">CSS-TRICKS</div>
</div>
<div class="right">
    <div class="linkx">
        <div class="link"><a href="#">TRICKK 1</a></div>
        <div class="link"><a href="#progress">TRICKK 2</a></div>
        <div class="link"><a href="#flipper">TRICKK 3</a></div>
    </div>
    <div class="caveman">
        <img src="images/sasuke.jpg" alt="" width="40">
        <div class="text"><p><i class="fa-brands fa-github"></i></p></div>
    </div>
</div>
</nav>
</body>`;

let cave = document.querySelector(".caveman");
cave.addEventListener("click", ()=>{
    window.location.href = "https://github.com/EMMANUEL-SUNMBOLA";
})