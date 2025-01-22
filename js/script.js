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

// ARTIKEL
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;

    function goToSlide(index) {
      currentSlide = index;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

      // Data artikel
      const articles = [
        {
          image: 'path/ke/gambar1.jpg',
          author: 'AdminWeb',
          date: '25 Maret 2024',
          category: 'Kajian',
          title: 'Pentingnya Partisipasi dalam...',
          excerpt: 'Partisipasi dalam organisasi di kampus merupakan salah satu aspek penting...'
        },
        {
          image: 'path/ke/gambar2.jpg',
          author: 'AdminWeb',
          date: '25 Maret 2024',
          category: 'Beasiswa',
          title: '[INFO BEASISWA]',
          excerpt: 'Selamat siang, FEB UI! Adkesma kembali hadir membawa info beasiswa...'
        },
        // Tambahkan artikel lainnya di sini
      ];


      // TIMELINE KEGIATAN
      document.addEventListener("DOMContentLoaded", () => {
        const todayBtn = document.getElementById("todayBtn");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const monthViewBtn = document.getElementById("monthViewBtn");
        const weekViewBtn = document.getElementById("weekViewBtn");
        const dayViewBtn = document.getElementById("dayViewBtn");
        const calendar = document.getElementById("calendar");
        const currentViewTitle = document.getElementById("currentViewTitle");
        const viewTitle = document.getElementById("viewTitle");
      
        let currentDate = new Date();
        let currentView = "month";
      
        const renderCalendar = () => {
          calendar.innerHTML = "";
          if (currentView === "month") {
            viewTitle.textContent = "Monthly View";
            renderMonthView();
          } else if (currentView === "week") {
            viewTitle.textContent = "Weekly View";
            renderWeekView();
          } else if (currentView === "day") {
            viewTitle.textContent = "Daily View";
            renderDayView();
          }
        };
      
        const renderMonthView = () => {
          currentViewTitle.textContent = currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          });
          const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
          ).getDate();
          const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const monthDiv = document.createElement("div");
          monthDiv.className = "month";
      
          // Render Day Names (Sun, Mon, ...)
          dayNames.forEach((day) => {
            const dayHeader = document.createElement("div");
            dayHeader.className = "day-header";
            dayHeader.textContent = day;
            monthDiv.appendChild(dayHeader);
          });
      
          // Render Days of the Month
          for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "day";
            dayDiv.textContent = day;
            monthDiv.appendChild(dayDiv);
          }
      
          calendar.appendChild(monthDiv);
        };
      
        const renderWeekView = () => {
          const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const weekDiv = document.createElement("div");
          weekDiv.className = "week";
      
          // Header untuk nama hari, tanggal, bulan, tahun
          const headerRow = document.createElement("div");
          headerRow.className = "header-row";
      
          let startOfWeek = currentDate.getDate() - currentDate.getDay(); // Hari pertama minggu ini
          dayNames.forEach((day, index) => {
            const dayHeader = document.createElement("div");
            dayHeader.className = "day-header";
            const currentDay = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              startOfWeek + index
            );
            dayHeader.textContent = `${day}, ${currentDay.getDate()}/${
              currentDay.getMonth() + 1
            }/${currentDay.getFullYear()}`;
            headerRow.appendChild(dayHeader);
          });
          weekDiv.appendChild(headerRow);
      
          // All-Day Section
          const allDaySection = document.createElement("div");
          allDaySection.className = "all-day";
          for (let hour = 0; hour < 24; hour++) {
            const timeSlot = document.createElement("div");
            timeSlot.className = "time-slot";
            timeSlot.textContent = `${hour % 12 || 12} ${
              hour < 12 ? "AM" : "PM"
            }`; // Format waktu
            allDaySection.appendChild(timeSlot);
          }
          weekDiv.appendChild(allDaySection);
      
          calendar.appendChild(weekDiv);
        };
      
        const renderDayView = () => {
          const dayDiv = document.createElement("div");
          dayDiv.className = "day-view";
      
          // Menambahkan bagian header dengan nama hari
          const dayHeader = document.createElement("div");
          dayHeader.className = "day-header";
          dayHeader.textContent = currentDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          dayDiv.appendChild(dayHeader);
      
          // Tambahkan bagian All-Day
          const allDaySection = document.createElement("div");
          allDaySection.className = "all-day";
          for (let hour = 0; hour < 24; hour++) {
            const timeSlot = document.createElement("div");
            timeSlot.className = "time-slot";
            timeSlot.textContent = `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;
            allDaySection.appendChild(timeSlot);
          }
      
          dayDiv.appendChild(allDaySection);
      
          calendar.appendChild(dayDiv);
        };
      
        todayBtn.addEventListener("click", () => {
          currentDate = new Date(); // Kembali ke hari ini
          currentView = "month"; // Tampilkan dalam mode bulan
          renderCalendar();
        });
      
        prevBtn.addEventListener("click", () => {
          if (currentView === "month") {
            currentDate.setMonth(currentDate.getMonth() - 1);
          } else if (currentView === "week") {
            currentDate.setDate(currentDate.getDate() - 7);
          } else if (currentView === "day") {
            currentDate.setDate(currentDate.getDate() - 1);
          }
          renderCalendar();
        });
      
        nextBtn.addEventListener("click", () => {
          if (currentView === "month") {
            currentDate.setMonth(currentDate.getMonth() + 1);
          } else if (currentView === "week") {
            currentDate.setDate(currentDate.getDate() + 7);
          } else if (currentView === "day") {
            currentDate.setDate(currentDate.getDate() + 1);
          }
          renderCalendar();
        });
      
        monthViewBtn.addEventListener("click", () => {
          currentView = "month";
          renderCalendar();
        });
      
        weekViewBtn.addEventListener("click", () => {
          currentView = "week";
          renderCalendar();
        });
      
        dayViewBtn.addEventListener("click", () => {
          currentView = "day";
          renderCalendar();
        });
      
        renderCalendar();
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
