import{a as w,S as L,i as l}from"./assets/vendor-mdVVRe9K.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const C="45559560-5df08bb83c1629c82dd907879";async function y(t,s=1,r=15){try{return(await w.get(`https://pixabay.com/api/?key=${C}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${r}`)).data}catch(i){console.log(i)}}function p(t){return t.hits.map(s=>{const{webformatURL:r,largeImageURL:i,tags:e,views:o,downloads:a,likes:b,comments:v}=s;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img 
                class="gallery-image" 
                src="${r}"
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
          </li>`}).join("")}const h=new L(".gallery-link",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".loader"),$=document.querySelector(".form"),c=document.querySelector(".load-more"),m=document.querySelector(".image-gallery");$.addEventListener("submit",k);c.addEventListener("click",R);let d;const S=15;let u,g,f="";function k(t){d=1,m.innerHTML="",t.preventDefault(),f=t.target.elements.picture.value.trim(),n.style.display="inline-block",y(f).then(r=>{u=r.totalHits,g=u/S,n.style.display="none",r.hits.length>0?(m.insertAdjacentHTML("beforeend",p(r)),g<=d?(c.style.display="none",l.show({message:"Sorry, there are no more images to load!",position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"})):(c.style.display="block",h.refresh())):(c.style.display="none",l.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"}))}).catch(r=>{n.style.display="none",l.show({message:`${r.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})})}function R(){d++;try{const t=m.lastElementChild.getBoundingClientRect();n.style.display="inline-block",y(f,d).then(s=>{n.style.display="none",m.insertAdjacentHTML("beforeend",p(s)),h.refresh(),window.scrollBy({top:t.bottom,behavior:"smooth"})}),g<=d&&(c.style.display="none",l.show({message:"Sorry, there are no more images to load!",position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"}))}catch(t){l.show({message:`${t.message}`,position:"topRight",backgroundColor:"#2596be",messageColor:"#fff"})}}
//# sourceMappingURL=index.js.map
