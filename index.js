import{a as g,S as b,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const L="34730863-c268bffb7a5a82490d4aafc58";g.defaults.baseURL="https://pixabay.com/api/";async function p(a,s){return(await g.get("",{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader-wrapper"),y=document.querySelector(".load-more-btn"),w=new b(".gallery a",{captionsData:"alt",captionDelay:250}),C=a=>{const s=a.map(e=>`<li class="gallery-item">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img
              class="gallery-img"
              src="${e.webformatURL}"
              alt="${e.tags}"
              loading="lazy"
            />
          </a>  
          <div class="img-descr-wrapper">
            <p class="img-descr">
              <span class="descr-title">Likes</span>
              <span class="descr-text">${e.likes}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Views</span>
              <span class="descr-text">${e.views}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Comments</span>
              <span class="descr-text">${e.comments}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Downloads</span>
              <span class="descr-text">${e.downloads}</span>
            </p>
          </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",s),w.refresh()},S=()=>{m.innerHTML=""},k=()=>{h.classList.add("is-visible")},v=()=>{h.classList.remove("is-visible")},B=()=>{y.classList.add("is-visible")},M=()=>{y.classList.remove("is-visible")},r={createGallery:C,clearGallery:S,showLoader:k,hideLoader:v,showLoadMoreButton:B,hideLoadMoreButton:M};let f="",c=0,n=0;const d=document.querySelector(".form"),E=document.querySelector(".load-more-btn");d.addEventListener("submit",O);E.addEventListener("click",q);async function O(a){a.preventDefault(),r.hideLoadMoreButton(),c=1;const s=a.target.searchText.value.trim();if(s===""){l.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",messageSize:"16",backgroundColor:"yellow",closeOnClick:!0});return}r.clearGallery(),r.showLoader(),f=s;try{const e=await p(s);if(n=e.totalHits,e.hits.length===0){l.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),r.hideLoader(),d.reset();return}r.createGallery(e.hits),r.hideLoader(),n-=e.hits.length}catch{l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),r.hideLoader()}if(d.reset(),n<1){l.info({position:"bottomRight",timeout:7e3,message:"We're sorry, but you've reached the end of search results.",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0});return}r.showLoadMoreButton()}async function q(){r.hideLoadMoreButton(),r.showLoader(),c+=1;const a=await p(f,c);try{r.createGallery(a.hits),r.hideLoader(),n-=a.hits.length;const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{r.hideLoader(),l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0})}if(n<1){r.hideLoadMoreButton(),l.info({position:"bottomRight",timeout:7e3,message:"We're sorry, but you've reached the end of search results.",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0});return}r.showLoadMoreButton()}
//# sourceMappingURL=index.js.map
