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


const gallery = document.querySelector('.gallery');
const PAUSE = 2000;


const fetchImagesAsync = (imagesList) => {
  let threeImages = imagesList.splice(0, 3);
  threeImages.forEach(element => {
    gallery.innerHTML += `<img src=${element} style="width:170px; height:130px; margin:30px">`
  });

  if (imagesList.length > 0) setTimeout(() => {
    fetchImagesAsync(imagesList)
  }, PAUSE)
};

fetchImagesAsync(imagesList);

//===========   Обязательными условиеми есть:
//              - отрисовка трех фото после полной загрузки фото
//              - загрузка следующей партии фото ПОСЛЕ того, как загрузились предыдущие (с задержкой 2000мс);
//              - загрузка блоками по 3 фото (одновременно);
//              - в загрузке изображений использование Promise.



// const gallery = document.querySelector('.gallery');
// const PAUSE = 2000;

// console.log(imagesList.length);
// console.log(imagesList)

// gallery.innerHTML += imagesList.forEach((element) => `<img src=${element}/>`);

// let newarray = images1(imagesList);
// const img1 = images1(imagesList);
// const img2 = images2(imagesList);
// const img3 = images3(imagesList);


// const rend =() =>( img.forEach(element => {gallery.innerHTML += `<img src=${element}/>`}));
// gallery.innerHTML += img.forEach((element) => `<img src=${element}/>`);
// console.log(img);



// const asyncPromise = images1(imagesList);
// console.log(asyncPromise);

// asyncPromise()
// .then

// const promise = new Promise ((onResolve, onReject) => {
//   setTimeout(() => 
//   onResolve(imagesList),
//   // onReject (console.log('ERROR'))
//   PAUSE);
// });
// console.log(promise);
// const images1 = (arr) => {
//   let img1 = arr.splice(0, 3);
//   // console.log(img1);
//   return img1;  
// };
// // console.log(imagesList)
              
// const images11 = images1(imagesList);
// console.log(imagesList);
              
// const images2 = images1(imagesList);
// // console.log(imagesList)
// console.log(imagesList.length);
              
              
// const images3 = images1(imagesList);
// console.log(imagesList.length);
              
              
// const images4 = images1(imagesList);
// console.log(imagesList.length);

// promise
// .then (value => console.log(value), err => console.log('ERROR'))
// .then (img.forEach(element => {
//   gallery.innerHTML += `<img src=${element}/>`}))
// .then (img.forEach(element => {
//   gallery.innerHTML += `<img src=${element}/>`}))
  
// promise
// .then (console.log(img))
// .then (console.log(img))
// .then (console.log(img))

// promise
// .then (images11);

// console.log(promise)
// .then (images2)
// .then (images3)