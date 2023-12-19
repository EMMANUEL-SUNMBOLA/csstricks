let nav = document.querySelector('nav');
nav.innerHTML = `    <nav>
<div class="left">
    <div class="brand">CSS-TRICKS</div>
</div>
<div class="right">
    <div class=""><a href="index.html">TRICKK 1</a></div>
    <div class=""><a href="circle.html">TRICKK 2</a></div>
    <div class="caveman">
        <img src="images/sasuke.jpg" alt="" width="40">
        <div class="text"><p><i class="fa-solid fa-code"></i></p></div>
    </div>
</div>
</nav>
</body>`;

let cave = document.querySelector(".caveman");
cave.addEventListener("click", ()=>{
    window.location.href = "https://github.com/EMMANUEL-SUNMBOLA";
})