function showSidebar(){
            const sidebar = document.querySelector('#sidebar')
            sidebar.style.display = 'flex'
            
        }
        function hideSidebar(){
            const sidebar = document.querySelector('#sidebar')
            sidebar.style.display = 'none'
            
        } 
              window.addEventListener('DOMContentLoaded', () => {
             document.getElementById('sidebar').style.display = 'none'; 
              });
        

        const stickyNav = document.getElementById('stickyNav');
        const topHeader = document.querySelector('.top-header');
        const topHeaderHeight = topHeader.offsetHeight;

        window.addEventListener('scroll', () => {
        if (window.scrollY > topHeaderHeight) {
         stickyNav.classList.add('sticky');
       topHeader.style.display = 'none';
        } else {
       stickyNav.classList.remove('sticky');
      topHeader.style.display = 'flex';
    }
    });
    
  // Show button when scrolled down
  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  
  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const slidesWrapper = document.querySelector(".slides-wrapper");
  const slides = document.querySelectorAll(".body-text");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideCount = 0;
  const maxAutoSlides = totalSlides - 1;

  function updateSlidePosition() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  document.querySelectorAll("#next").forEach(btn => {
    btn.addEventListener("click", nextSlide);
  });

  document.querySelectorAll("#Prev").forEach(btn => {
    btn.addEventListener("click", prevSlide);
  });

  function autoSlideLoop() {
    setInterval(() => {
      nextSlide();
    }, 4000); 
  }

  function autoSlideOnce() {
    const interval = setInterval(() => {
      if (autoSlideCount < maxAutoSlides) {
        nextSlide();
        autoSlideCount++;
      } else {
        clearInterval(interval);
      }
    }, 3000);
  }

  function initSlider() {
    updateSlidePosition();

    if (window.innerWidth <= 850) {
      autoSlideLoop(); 
      autoSlideOnce(); 
    }
  }

  window.addEventListener("load", initSlider);

 
  

