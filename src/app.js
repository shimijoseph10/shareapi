document.querySelector('#share').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'This is subject',
      text: 'This is the body',
      url: 'https://dev.localhost/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
})

// Sharing files
// if (navigator.canShare && navigator.canShare({ files: filesArray })) {
//   navigator.share({
//     files: filesArray,
//     title: 'Vacation Pictures',
//     text: 'Photos from September 27 to October 14.',
//   })
//   .then(() => console.log('Share was successful.'))
//   .catch((error) => console.log('Sharing failed', error));
// } else {
//   console.log(`Your system doesn't support sharing files.`);
// }