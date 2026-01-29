import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import renderFunctions from './js/render-functions';

let currentInpuValue = '';
let currentPage = 0;
let curentTotalHits = 0;

const formEl = document.querySelector('.form');
const loadMoreBtnEl = document.querySelector('.load-more-btn');

formEl.addEventListener('submit', handleImageSearch);
loadMoreBtnEl.addEventListener('click', handlePagination);

async function handleImageSearch(e) {
  e.preventDefault();
  renderFunctions.hideLoadMoreButton();
  currentPage = 1;

  const inputValue = e.target.searchText.value.trim();

  if (inputValue === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please enter your request in the search field!',
      messageColor: 'black',
      messageSize: '16',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
    return;
  }

  renderFunctions.clearGallery();
  renderFunctions.showLoader();

  currentInpuValue = inputValue;

  try {
    const data = await getImagesByQuery(inputValue);

    curentTotalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching<br>your search query. Please try again!',
        messageColor: '#ffffff',
        messageSize: '16',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
        closeOnClick: true,
      });
      renderFunctions.hideLoader();
      return;
    }

    renderFunctions.createGallery(data.hits);
    renderFunctions.hideLoader();
    curentTotalHits -= data.hits.length;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Sorry, something went wrong...Try later',
      messageColor: 'black',
      messageSize: '18',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
    renderFunctions.hideLoader();
  }

  if (curentTotalHits > 1) {
    renderFunctions.showLoadMoreButton();
  }

  formEl.reset();
}

async function handlePagination() {
  renderFunctions.showLoader();
  currentPage += 1;

  const data = await getImagesByQuery(currentInpuValue, currentPage);

  try {
    renderFunctions.createGallery(data.hits);
    renderFunctions.hideLoader();
    curentTotalHits -= data.hits.length;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Sorry, something went wrong...Try later',
      messageColor: 'black',
      messageSize: '18',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
    renderFunctions.hideLoader();
  }

  if (curentTotalHits < 1) {
    renderFunctions.hideLoadMoreButton();
    iziToast.info({
      position: 'bottomRight',
      timeout: 7000,
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: 'black',
      messageSize: '18',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
    return;
  }
}
