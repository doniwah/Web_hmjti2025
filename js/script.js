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

const token = "IGAAISlNSW8edBZAE1CUXRMX05kOWNCcEsyVjJMUF9rYnZAvRGpEeHFQN0RuMlBRWUZAYNjU5T0lEQi16dUNXS3h1UFczNFZAlNE56Um1pclpmWWtkaFpuMVBwOVphY2dya0szWlJrVHRmLV9EUHR0T0FpYk9LVk52REdWT05iajVKawZDZD";
const userId = "17841452108913648"; // Ganti dengan User ID
const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,caption,permalink&access_token=${token}`;

// Ambil data postingan Instagram
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Menampilkan data respons dari API untuk debugging
    const gallery = document.querySelector('.ig-gallery');
    if (data && data.data) {
      data.data.forEach(post => {
        if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
          const postElement = document.createElement('div');
          postElement.classList.add('ig-post');
          postElement.innerHTML = `
            <img src="${post.media_url}" alt="Instagram Post" />
            <div class="actions">
              <button class="like">❤️</button>
              <button class="comment">💬</button>
              <button class="share">🔗</button>
            </div>
            <p class="caption">${post.caption || 'No caption available'}</p>
            <div class="link" onclick="window.open('${post.permalink}', '_blank');"></div>
          `;
          gallery.appendChild(postElement);
        }
      });
    } else {
      gallery.innerHTML = '<p>No Instagram posts available.</p>';
    }
  })
  .catch(error => {
    console.error('Error fetching Instagram posts:', error);
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
