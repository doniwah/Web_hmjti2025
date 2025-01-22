let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelectorAll('.slide');
    const newTransformValue = -currentSlide * 320 + 'px';
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue})`;
}


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
  
  const navLinks = document.querySelectorAll(".navbar-nav a");
  
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
  