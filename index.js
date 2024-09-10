import{a as w,S as L,i as n}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const C="45559560-5df08bb83c1629c82dd907879";async function p(t,r=1,s=15){try{return(await w.get(`https://pixabay.com/api/?key=${C}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`)).data}catch(i){console.log(i)}}function u(t){return t.hits.map(r=>{const{webformatURL:s,largeImageURL:i,tags:e,views:o,downloads:a,likes:b,comments:v}=r;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img 
                class="gallery-image" 
                src="${s}"
                alt="${e}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${b}</div>
                <div class="overlay-item">Views<br>${o}</div>
                <div class="overlay-item">Comments<br>${v}</div>
                <div class="overlay-item">Downloads<br>${a}</div>
                </div>
            </div>
          </li>`}).join("")}const h=new L(".gallery-link",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader"),$=document.querySelector(".form"),c=document.querySelector(".load-more"),m=document.querySelector(".image-gallery");$.addEventListener("submit",k);c.addEventListener("click",R);let d;const S=15;let y,g,f="";async function k(t){t.preventDefault(),d=1,m.innerHTML="",f=t.target.elements.picture.value.trim(),l.style.display="inline-block";try{const s=await p(f);y=s.totalHits,g=y/S,l.style.display="none",s.hits.length>0?(m.insertAdjacentHTML("beforeend",u(s)),g<=d?(c.style.display="none",n.show({message:"Sorry, there are no more images to load!",position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"})):(c.style.display="block",h.refresh())):(c.style.display="none",n.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"}))}catch(s){l.style.display="none",n.show({message:`${s.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}}async function R(){try{d++;const t=m.lastElementChild.getBoundingClientRect();l.style.display="inline-block";const r=await p(f,d);l.style.display="none",m.insertAdjacentHTML("beforeend",u(r)),h.refresh(),window.scrollBy({top:t.bottom,behavior:"smooth"}),g<=d&&(c.style.display="none",n.show({message:"Sorry, there are no more images to load!",position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"}))}catch(t){n.show({message:`${t.message}`,position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"})}}
//# sourceMappingURL=index.js.map
