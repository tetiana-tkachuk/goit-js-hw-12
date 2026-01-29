import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import renderFunctions from './js/render-functions';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleImageSearch);

function handleImageSearch(e) {
  e.preventDefault();
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

  getImagesByQuery(inputValue)
    .then(images => {
      if (images.length === 0) {
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
      renderFunctions.createGallery(images);
      renderFunctions.hideLoader();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: 'Sorry, something went wrong...Try later',
        messageColor: 'black',
        messageSize: '18',
        backgroundColor: 'yellow',
        closeOnClick: true,
      });
      renderFunctions.hideLoader();
    });
  formEl.reset();
}
