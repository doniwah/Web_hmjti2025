// JavaScript untuk mengatur perubahan navbar
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-transparent");
  }
});

// BKPENGURUSAN
// BKPENGURUSAN
let currentIndex = 0;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dots li');
const totalItems = items.length;
let slideInterval;
const intervalTime = 3000; // Waktu pergantian slide (dalam milidetik)

function toggleSlide(newIndex, direction = 1) {
    if (newIndex === currentIndex) return;
    
    const currentItem = items[currentIndex];
    const nextItem = items[newIndex];
    
    currentItem.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    nextItem.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    
    currentItem.style.transform = `translateX(${direction * -100}%)`;
    currentItem.style.opacity = '0';
    
    nextItem.style.display = 'block';
    nextItem.style.transform = `translateX(${direction * 100}%)`;
    nextItem.style.opacity = '0';
    
    setTimeout(() => {
        nextItem.style.opacity = '1';
        nextItem.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        currentItem.style.display = 'none';
    }, 500);
    
    dots[currentIndex].classList.remove('active');
    dots[newIndex].classList.add('active');
    
    currentIndex = newIndex;
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % totalItems;
    toggleSlide(newIndex, 1);
}

function prevSlide() {
    let newIndex = (currentIndex - 1 + totalItems) % totalItems;
    toggleSlide(newIndex, -1);
}

function startAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const direction = index > currentIndex ? 1 : -1;
        toggleSlide(index, direction);
        stopAutoSlide();
        startAutoSlide();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    items.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.display = 'none';
            item.style.opacity = '0';
            item.style.transform = 'translateX(100%)';
        } else {
            item.classList.add('active');
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
    toggleSlide(currentIndex);
    startAutoSlide();
});
// END BKpengurusan

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');  // Menyeleksi semua section
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item');  // Menyeleksi semua item navbar

  let scrollPosition = window.scrollY + 150;  // Offset agar garis bawah muncul sedikit lebih awal

  sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Jika scroll masih berada di dalam section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks[index].classList.add('active');  // Menambahkan garis bawah
      } else {
          navLinks[index].classList.remove('active');  // Menghapus garis bawah hanya jika scroll keluar dari section
      }
  });
});

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar-nav a");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 50; // Sesuaikan offset
//     if (scrollY >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.hash === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });
