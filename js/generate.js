function createImageContainer(i) {
  let imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageContainer.classList.add(`image-${i}`);
  imageContainer.innerHTML = `<img src="img/${i}.jpg" />`;

  return imageContainer;
}

function generateContent(query, amount) {
  new Array(amount).fill(0).forEach((_, i) => {
    document.querySelector(query).appendChild(createImageContainer(i+1));
  });
}
