import{a as d,S as m,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="34730863-c268bffb7a5a82490d4aafc58";d.defaults.baseURL="https://pixabay.com/api/";async function y(a,t){return(await d.get("",{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const p=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250}),L=a=>{const t=a.map(s=>`<li class="gallery-item">
          <a href=${s.largeImageURL} class="gallery-link">
            <img
              class="gallery-img"
              src=${s.webformatURL}
              alt="${s.tags}"
              loading="lazy"
            />
          </a>  
          <div class="img-descr-wrapper">
            <p class="img-descr">
              <span class="descr-title">Likes</span>
              <span class="descr-text">${s.likes}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Views</span>
              <span class="descr-text">${s.views}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Comments</span>
              <span class="descr-text">${s.comments}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Downloads</span>
              <span class="descr-text">${s.downloads}</span>
            </p>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),h.refresh()},b=()=>{p.innerHTML=""},w=()=>{u.classList.add("is-visible")},S=()=>{u.classList.remove("is-visible")},o={createGallery:L,clearGallery:b,showLoader:w,hideLoader:S};let i=1;const g=document.querySelector(".form");g.addEventListener("submit",v);async function v(a){a.preventDefault();const t=a.target.searchText.value.trim();if(t===""){n.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",messageSize:"16",backgroundColor:"yellow",closeOnClick:!0});return}o.clearGallery(),o.showLoader();try{const s=await y(t);if(s.hits.length===0){n.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),o.hideLoader();return}i+=1,o.createGallery(s.hits,i),o.hideLoader()}catch{n.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),o.hideLoader()}g.reset()}
//# sourceMappingURL=index.js.map
