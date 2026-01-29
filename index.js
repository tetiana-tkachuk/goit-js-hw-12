import{a as c,S as g,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="34730863-c268bffb7a5a82490d4aafc58";c.defaults.baseURL="https://pixabay.com/api/";function m(a){return c.get("",{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits)}const d=document.querySelector(".gallery"),p=document.querySelector(".loader-wrapper"),y=new g(".gallery a",{captionsData:"alt",captionDelay:250}),h=a=>{const t=a.map(s=>`<li class="gallery-item">
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
        </li>`).join("");d.insertAdjacentHTML("beforeend",t),y.refresh()},L=()=>{d.innerHTML=""},b=()=>{p.classList.add("is-visible")},w=()=>{p.classList.remove("is-visible")},o={createGallery:h,clearGallery:L,showLoader:b,hideLoader:w},u=document.querySelector(".form");u.addEventListener("submit",S);function S(a){a.preventDefault();const t=a.target.searchText.value.trim();if(t===""){n.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",messageSize:"16",backgroundColor:"yellow",closeOnClick:!0});return}o.clearGallery(),o.showLoader(),m(t).then(s=>{if(s.length===0){n.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),o.hideLoader();return}o.createGallery(s),o.hideLoader()}).catch(s=>{n.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow",closeOnClick:!0}),o.hideLoader()}),u.reset()}
//# sourceMappingURL=index.js.map
