const myBtnContainer = document.querySelectorAll("#myBtnContainer button");
const shopBoxes = document.querySelectorAll(".shop-section .box");

let images = [];       
let currentIndex = 0;  

// Category filter
myBtnContainer.forEach(button => {
  button.addEventListener("click", function (e) {
    myBtnContainer.forEach(btn => btn.classList.remove("active"));
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

      // Click listener
      boxImg.onclick = () => {
        currentIndex = images.indexOf(imgUrl);
        openLightbox(imgUrl);
      };
    }
  });
}

// Lightbox open
function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
  updateButtons(); 
}

// Lightbox close
function closeLightbox() {
  lightbox.style.display = "none";
}

// Prev
function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    lightboxImg.src = images[currentIndex];
    updateButtons();
  }
}

// Next
function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    lightboxImg.src = images[currentIndex];
    updateButtons();
  }
}

// Button disable/enable logic
function updateButtons() {
  prevBtn.style.display = (currentIndex === 0) ? "none" : "block";
  nextBtn.style.display = (currentIndex === images.length - 1) ? "none" : "block";
}

// Event listeners
closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Close when clicked outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Default: show all images
updateImages("all");
