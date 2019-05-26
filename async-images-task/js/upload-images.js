const imagesList = [
  'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_sx.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-6.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_REV.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/fronte-copia.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-4.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/retro-copia.jpg',
  'http://gallery-motorcycles.com/wp-content/uploads/2016/12/trequarti.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-7.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/21_riserblog-yamaha-mt-10-naked-eicma-2015-10.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/36_riserblog-yamaha-mt-07-fluo-3.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-3.jpg',
  'https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-6.jpg',

];

// У вас есть массив с картинками imagesList

// Нам нужно загружать 3 картинки после чего рендерить их в галерею.
// После того как картинки будут загружены и отрендерены нужно сделать паузу в 2 секунды
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// Потом снова загружать 3 картинки, рендерить их в галерею. Снова пауза.
// И так до конца массива

// В работе используем только нативный джс


// const gallery = document.querySelector('.gallery');
// const PAUSE = 2000;


// const fetchImagesAsync = (imagesList) => {
//   let threeImages = imagesList.splice(0, 3);
//   threeImages.forEach(element => {
//     gallery.innerHTML += `<img src=${element} style="width:170px; height:130px; margin:30px">`
//   });

//   if (imagesList.length > 0) setTimeout(() => {
//     fetchImagesAsync(imagesList)
//   }, PAUSE)
// };

// fetchImagesAsync(imagesList);

//===========   Обязательными условиеми есть:
//              - отрисовка трех фото после полной загрузки фото
//              - загрузка следующей партии фото ПОСЛЕ того, как загрузились предыдущие (с задержкой 2000мс);
//              - загрузка блоками по 3 фото (одновременно);
//              - в загрузке изображений использование Promise.

const gallery = document.querySelector('.gallery');
const PAUSE = 2000;

const renderImage = (src) => {
   const img = new Image('img');
   img.onload = function () {
      gallery.appendChild(img);
   }
   img.src = src;
};

async function fetchImagesAsync(imagesList) {
   if (imagesList.length === 0) {
      return;
   }
   const currentReqList = imagesList.slice(0, 3);
   const imgPromiseList = currentReqList.map(item => {
      return new Promise((resolve) => resolve(item))
   });

   let imgToRender = await Promise.all(imgPromiseList);
   imgToRender.forEach((src) => renderImage(src));
   setTimeout(() => fetchImagesAsync(imagesList.slice(3)), PAUSE);
}

fetchImagesAsync(imagesList);