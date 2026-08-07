function setLang(lang){

    localStorage.setItem("siteLang", lang);

    document.querySelectorAll('[data-uk]').forEach(el=>{
        el.style.display = (lang==="uk") ? "" : "none";
    });

    document.querySelectorAll('[data-en]').forEach(el=>{
        el.style.display = (lang==="en") ? "" : "none";
    });

    document.querySelectorAll(".lang-toggle button").forEach(btn=>{
        btn.classList.toggle("active", btn.dataset.lang===lang);
    });

    document.documentElement.lang = lang;

}
function typeTitle(){

    const title = document.querySelector(".period-head h2");

    if(!title) return;

    const visible = [...title.children].find(
        el => getComputedStyle(el).display !== "none"
    );

    if(!visible) return;

    if(!visible.dataset.original){

    visible.dataset.original = visible.textContent;

}

const text = visible.dataset.original;
    clearTimeout(window.typeTimer);
    visible.textContent = "";

    title.classList.remove("done");
    title.classList.add("typing");

    let i = 0;

    function write(){

        if(i < text.length){

            visible.textContent += text.charAt(i);

            i++;

            window.typeTimer = setTimeout(write,55);

        }else{

            title.classList.add("done");

        }

    }

    write();

}
document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
  const toggle = document.getElementById('langToggle');
  if (toggle){
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      setLang(btn.dataset.lang);
    setTimeout(typeTitle,20);
    
    });
  }
  const savedLang = localStorage.getItem("siteLang") || "uk";
setLang(savedLang);
  typeTitle();
  const stamp = document.querySelector(".archive-stamp");

if(stamp){

    setTimeout(()=>{

        stamp.classList.add("show");

    },600);

}

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>observer.observe(card));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll("img.frame, .hero-photo").forEach(img => {

    img.addEventListener("click", () => {

        lightboxImg.src = img.src;
        lightbox.classList.add("show");

    });

});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});
});
const progress = document.querySelector(".era-progress");

if(progress){

    const dots = progress.querySelectorAll(".dot");
    const lines = progress.querySelectorAll(".line");

    dots.forEach((dot,index)=>{

        setTimeout(()=>{

            dot.style.transform="scale(1)";

        },index*220);

    });

    lines.forEach((line,index)=>{

        if(index < progress.querySelectorAll(".dot.active").length-1){

            setTimeout(()=>{

                line.classList.add("fill");

            },120+index*220);

        }

    });

}
document.querySelectorAll("a").forEach(link=>{

    const href = link.getAttribute("href");

    if(!href) return;

    if(href.startsWith("#")) return;

    if(href.startsWith("http")) return;

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location = href;

        },300);

    });

});