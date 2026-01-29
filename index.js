import{a as u,S as L,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const b="34730863-c268bffb7a5a82490d4aafc58";u.defaults.baseURL="https://pixabay.com/api/";async function p(a,t){return(await u.get("",{params:{key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const g=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper"),h=document.querySelector(".load-more-btn"),w=new L(".gallery a",{captionsData:"alt",captionDelay:250}),C=a=>{const t=a.map(e=>`<li class="gallery-item">
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),w.refresh()},S=()=>{g.innerHTML=""},v=()=>{m.classList.add("is-visible")},k=()=>{m.classList.remove("is-visible")},B=()=>{h.classList.add("is-visible")},M=()=>{h.classList.remove("is-visible")},r={createGallery:C,clearGallery:S,showLoader:v,hideLoader:k,showLoadMoreButton:B,hideLoadMoreButton:M};let f="",c=0,n=0;const y=document.querySelector(".form"),O=document.querySelector(".load-more-btn");y.addEventListener("submit",E);O.addEventListener("click",q);async function E(a){a.preventDefault(),r.hideLoadMoreButton(),c=1;const t=a.target.searchText.value.trim();if(t===""){l.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",messageSize:"16",backgroundColor:"yellow",closeOnClick:!0});return}r.clearGallery(),r.showLoader(),f=t;try{const e=await p(t);if(n=e.totalHits,e.hits.length===0){l.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),r.hideLoader();return}r.createGallery(e.hits),r.hideLoader(),n-=e.hits.length}catch{l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),r.hideLoader()}n>1&&r.showLoadMoreButton(),y.reset()}async function q(){r.showLoader(),c+=1;const a=await p(f,c);try{r.createGallery(a.hits),r.hideLoader(),n-=a.hits.length}catch{l.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),r.hideLoader()}if(n<1){r.hideLoadMoreButton(),l.info({position:"bottomRight",timeout:7e3,message:"We're sorry, but you've reached the end of search results.",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0});return}}
//# sourceMappingURL=index.js.map
