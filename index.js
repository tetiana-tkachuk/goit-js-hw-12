import{a as u,S as L,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b="34730863-c268bffb7a5a82490d4aafc58";u.defaults.baseURL="https://pixabay.com/api/";async function g(a,r){return(await u.get("",{params:{key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper"),h=document.querySelector(".load-more-btn"),w=new L(".gallery a",{captionsData:"alt",captionDelay:250}),C=a=>{const r=a.map(e=>`<li class="gallery-item">
          <a href=${e.largeImageURL} class="gallery-link">
            <img
              class="gallery-img"
              src=${e.webformatURL}
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",r),w.refresh()},S=()=>{p.innerHTML=""},v=()=>{m.classList.add("is-visible")},k=()=>{m.classList.remove("is-visible")},B=()=>{h.classList.add("is-visible")},E=()=>{h.classList.remove("is-visible")},s={createGallery:C,clearGallery:S,showLoader:v,hideLoader:k,showLoadMoreButton:B,hideLoadMoreButton:E};let y="",c=0,n=0;const f=document.querySelector(".form"),M=document.querySelector(".load-more-btn");f.addEventListener("submit",O);M.addEventListener("click",q);async function O(a){a.preventDefault(),s.hideLoadMoreButton(),c=1;const r=a.target.searchText.value.trim();if(r===""){l.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",messageSize:"16",backgroundColor:"yellow",closeOnClick:!0});return}s.clearGallery(),s.showLoader(),y=r;try{const e=await g(r);if(n=e.totalHits,e.hits.length===0){l.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),s.hideLoader();return}s.createGallery(e.hits),s.hideLoader(),n-=e.hits.length}catch{l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),s.hideLoader()}n>1&&s.showLoadMoreButton(),f.reset()}async function q(){s.showLoader(),c+=1;const a=await g(y,c);try{s.createGallery(a.hits),s.hideLoader(),n-=a.hits.length;const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{s.hideLoader(),l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0})}if(n<1){s.hideLoadMoreButton(),l.info({position:"bottomRight",timeout:7e3,message:"We're sorry, but you've reached the end of search results.",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0});return}}
//# sourceMappingURL=index.js.map
