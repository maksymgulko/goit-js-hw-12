import{a as h,S as b,i as u}from"./assets/vendor-mdVVRe9K.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v="45559560-5df08bb83c1629c82dd907879";async function y(s,o=1,r=15){try{return(await h.get(`https://pixabay.com/api/?key=${v}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}`)).data}catch(i){console.log(i)}}function f(s){return s.hits.map(o=>{const{webformatURL:r,largeImageURL:i,tags:e,views:t,downloads:l,likes:g,comments:p}=o;return`
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
                <div class="overlay-item">Likes<br>${g}</div>
                <div class="overlay-item">Views<br>${t}</div>
                <div class="overlay-item">Comments<br>${p}</div>
                <div class="overlay-item">Downloads<br>${l}</div>
                </div>
            </div>
          </li>`}).join("")}const L=new b(".gallery-link",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".loader"),w=document.querySelector(".form"),m=document.querySelector(".load-more"),a=document.querySelector(".image-gallery");w.addEventListener("submit",$);m.addEventListener("click",S);let c=1,d="";m.style.display="none";function $(s){a.innerHTML="",s.preventDefault(),d=s.target.elements.picture.value.trim(),n.style.display="inline-block",y(d,c).then(r=>{n.style.display="none",r.hits.length>0?(a.insertAdjacentHTML("beforeend",f(r)),m.style.display="block",L.refresh()):u.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}).catch(r=>{n.style.display="none",u.show({message:`❌ Сталася помилка: ${r.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})})}function S(){const s=document.querySelector(".image-gallery").lastElementChild.getBoundingClientRect();c++,n.style.display="inline-block",y(d,c).then(o=>{n.style.display="none",a.insertAdjacentHTML("beforeend",f(o)),window.scrollBy({top:s.bottom,behavior:"smooth"})})}
//# sourceMappingURL=index.js.map
