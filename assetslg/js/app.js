// const myBtnContainer = document.querySelectorAll("#myBtnContainer button");
// const shopBoxes = document.querySelectorAll(".shop-section .box");

// let images = [];        
// let currentIndex = 0;   

// // Category filter
// myBtnContainer.forEach(button => {
//   button.addEventListener("click", function (e) {
//     // Remove active class from all buttons
//     myBtnContainer.forEach(btn => btn.classList.remove("active"));
//     // Add active class to clicked button
//     e.target.classList.add("active");

//     const filter = e.target.dataset.name;

//     shopBoxes.forEach(box => {
//       const category = box.dataset.name;

//       if (filter === "all" || category === filter) {
//         box.classList.remove("hide");
//       } else {
//         box.classList.add("hide");
//       }
//     });

//     updateImages(filter);
//   });
// });


// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.querySelector(".lightbox-img");
// const closeBtn = document.querySelector(".lightbox .close");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// function updateImages(filter) {
//   images = [];
//   document.querySelectorAll(".shop-section .box").forEach((box) => {
//     if (filter === "all" || box.dataset.name === filter) {
//       const boxImg = box.querySelector(".box-img");
//       const imgUrl = boxImg.style.backgroundImage.slice(5, -2);
//       images.push(imgUrl);

//       boxImg.onclick = () => {
//         currentIndex = images.indexOf(imgUrl);
//         openLightbox(imgUrl);
//       };
//     }
//   });
// }

// // Lightbox open
// function openLightbox(src) {
//   lightbox.style.display = "flex";
//   lightboxImg.src = src;
// }

// // Lightbox close
// function closeLightbox() {
//   lightbox.style.display = "none";
// }

// // Prev
// function showPrev() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   lightboxImg.src = images[currentIndex];
// }

// // Next
// function showNext() {
//   currentIndex = (currentIndex + 1) % images.length;
//   lightboxImg.src = images[currentIndex];
// }

// closeBtn.addEventListener("click", closeLightbox);
// prevBtn.addEventListener("click", showPrev);
// nextBtn.addEventListener("click", showNext);

// // Close when clicked outside image
// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     closeLightbox();
//   }
// });

// updateImages("all");









const myBtnContainer = document.querySelectorAll("#myBtnContainer button");
const shopBoxes = document.querySelectorAll(".shop-section .box");

let images = [];        
let currentIndex = 0;   

// Category filter
myBtnContainer.forEach(button => {
  button.addEventListener("click", function (e) {
    // Remove active class from all buttons
    myBtnContainer.forEach(btn => btn.classList.remove("active"));
    // Add active class to clicked button
    e.target.classList.add("active");

    const filter = e.target.dataset.name;

    shopBoxes.forEach(box => {
      const category = box.dataset.name;

      if (filter === "all" || category === filter) {
        box.classList.remove("hide");
      } else {
        box.classList.add("hide");
      }
    });

    updateImages(filter);
  });
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateImages(filter) {
  images = [];
  document.querySelectorAll(".shop-section .box").forEach((box) => {
    if (filter === "all" || box.dataset.name === filter) {
      const boxImg = box.querySelector(".box-img");
      const imgUrl = boxImg.style.backgroundImage.slice(5, -2);
      images.push(imgUrl);

      boxImg.onclick = () => {
        currentIndex = images.indexOf(imgUrl);
        openLightbox();
      };
    }
  });
}

// Show image with controls
function showImage(index) {
  lightboxImg.src = images[index];

  // disable prev if first image
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  // disable next if last image
  if (index === images.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

// Lightbox open
function openLightbox() {
  lightbox.style.display = "flex";
  showImage(currentIndex);
}

// Lightbox close
function closeLightbox() {
  lightbox.style.display = "none";
}

// Prev
function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
}

// Next
function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
}

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Close when clicked outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

updateImages("all");
