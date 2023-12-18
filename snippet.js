let htmlDiv = document.querySelector(".html");
htmlDiv.innerText = `        <div class="container">
\b<div class="sub">
\b\b<img src="images/html.svg" alt="">
\b\b\b<div class="text"><p>html</p></div>
\b</div>
\b<div class="sub">
\b\b<img src="images/css.svg" alt="">
\b\b\b<div class="text"><p>css</p></div>
\b</div>
\b<div class="sub">
\b\b<img src="images/php.svg" alt="">
\b\b\b<div class="text"><p>php</p></div>
\b</div>
\b<div class="sub">
\b\b<img src="images/javascript.svg" alt="">
\b\b\b<div class="text">\n\b\b\b\b<p>javascript</p>\n\b\b\b</div>
\b</div>
</div>`

document.querySelector(".scss").innerText = `
.container{
    \b\bdisplay: flex;
    \b\balign-items: center;
    \b\bjustify-content: center;
    \b\bflex-wrap: wrap;
    \b\bgap: 5rem;
    \b.sub{
        \b\b\b&:hover{
            \b\b\b\b .text{
                \b\b\b\b\bopacity: 1;
                \b\b\b\b}
            \b\b\b}
        \b\bdisplay: flex;
        \b\balign-items: center;
        \b\bjustify-content: center;
        \b\bwidth: 8rem;
        \b\bpadding: 2rem;
        \b\bbackground-color: gray;
        \b\bz-index: 3;
        \b\bclip-path: polygon(51% 0, 100% 26%, 100% 76%, 57% 100%, 0 76%, 0 26%);
        \b\boutline: 1px solid gray;
        \b\b\bimg{
            \b\b\b\bwidth: 9rem;
            \b\b\b\bheight: 9rem;
        \b\b\b}
        \b\b\b.text{
            \b\b\b\bposition: absolute;
            \b\b\b\bwidth: 100%;
            \b\b\b\bheight: 100%;
            \b\b\b\bopacity: 0;
            \b\b\b\bdisplay: flex;
            \b\b\b\balign-items: center;
            \b\b\b\bjustify-content: center;   
            \b\b\b\bbackground-color:  rgba(22, 166, 180, 0.9);
            \b\b\b\btransition: all .3s ease-in-out;
            \b\b\b\bp{
                \b\b\b\b\bfont-size: 2rem;
                \b\b\b\b\btext-transform: uppercase;
                \b\b\b\b\bfont-weight: 1;
                \b\b\b\b\bcolor: white;
            \b\b\b\b}
        \b\b\b }
        \b\b}
}`;