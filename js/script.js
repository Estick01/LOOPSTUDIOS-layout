const productBlockContainers = document.querySelectorAll(".product-block-container");

productBlockContainers.forEach(container => {
  const currentCarousel = container.querySelector(".carousel"),
        firstImg = currentCarousel.querySelectorAll("img")[0],
        arrowIcons = container.querySelectorAll(".wrapper i");

  let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

  const showHideIcons = () => {
      let scrollWidth = currentCarousel.scrollWidth - currentCarousel.clientWidth;
      arrowIcons[0].style.display = currentCarousel.scrollLeft == 0 ? "none" : "block";
      arrowIcons[1].style.display = currentCarousel.scrollLeft == scrollWidth ? "none" : "block";
  }

  arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
          let firstImgWidth = firstImg.clientWidth + 14;
          currentCarousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
          setTimeout(() => showHideIcons(), 60);
      });
  });
  
  const autoSlide = () => {
      if(currentCarousel.scrollLeft - (currentCarousel.scrollWidth - currentCarousel.clientWidth) > -1 || currentCarousel.scrollLeft <= 0) return;
      positionDiff = Math.abs(positionDiff);
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - positionDiff;
      if(currentCarousel.scrollLeft > prevScrollLeft) { 
          return currentCarousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
      }
      currentCarousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }

  const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = currentCarousel.scrollLeft;
  }

  const dragging = (e) => {
      if(!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      currentCarousel.classList.add("dragging");
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      currentCarousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
  }

  const dragStop = () => {
      isDragStart = false;
      currentCarousel.classList.remove("dragging");

      if(!isDragging) return;
      isDragging = false;
      autoSlide();
  }

  currentCarousel.addEventListener("mousedown", dragStart);
  currentCarousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  currentCarousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  currentCarousel.addEventListener("touchend", dragStop);
});
