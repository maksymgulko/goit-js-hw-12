import{S as f,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="45559560-5df08bb83c1629c82dd907879";function y(s){const o="https://pixabay.com/api/?key="+g+"&q="+encodeURIComponent(s)+"&per_page=45&image_type=photo&orientation=horizontal&safesearch=true";return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>console.log("Error:",r))}function p(s){const o=document.querySelector(".image-gallery");o.innerHTML="";const r=s.hits.map(i=>{const{webformatURL:e,largeImageURL:t,tags:n,views:c,downloads:m,likes:d,comments:u}=i;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${t}">
              <img 
                class="gallery-image" 
                src="${e}"
                alt="${n}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${d}</div>
                <div class="overlay-item">Views<br>${c}</div>
                <div class="overlay-item">Comments<br>${u}</div>
                <div class="overlay-item">Downloads<br>${m}</div>
                </div>
            </div>
          </li>`}).join("");o.innerHTML=r}const h=new f(".gallery-link",{captionsData:"alt",captionDelay:250}),a=document.querySelector(".loader"),v=document.querySelector(".form"),b=document.querySelector(".image-gallery");v.addEventListener("submit",L);function L(s){b.innerHTML="",s.preventDefault();const r=s.target.elements.picture.value.trim();a.style.display="inline-block",y(r).then(i=>{a.style.display="none",i.hits.length>0?(p(i),h.refresh()):l.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}).catch(i=>{a.style.display="none",l.show({message:`❌ Сталася помилка: ${i.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})})}
//# sourceMappingURL=index.js.map
