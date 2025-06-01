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
  
   const slideWrapper = document.querySelector(".slides-wrapper");
 const slides = document.querySelectorAll(".body-text");
  const totalSlides = slides.length;
 let slideIndex = 0;
 let autoSlideCount = 0;
 let maxAutoSlides = totalSlides - 1;

 function updateSlidePosition(){
  slideWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
 }
 function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
 }
 function prevSlide(){
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
 }

  document.querySelectorAll("#Prev").forEach(btn => {
    btn.addEventListener("click", prevSlide);
  });
document.querySelectorAll("#next").forEach(btn => {
    btn.addEventListener("click", nextSlide);
  });

  function autoSlideLoop() {
    setInterval(() => {
      nextSlide();
    }, 4000);
  }
  function autoSlideOnce() {
    const interval = setInterval(() => {
       if(autoSlideCount < maxAutoSlides) {
        nextSlide();
        autoSlideCount++;
       }
       else{
        clearInterval(interval);
       }
    }, 3000);
  }
    function initSlider() {
      updateSlidePosition();

      if(window.innerWidth <= 850) {
        autoSlideLoop();
      }
      else{
         autoSlideOnce();
      }
    };

window.addEventListener("load", initSlider);

