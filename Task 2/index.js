
document.addEventListener("DOMContentLoaded",()=>{
  const parallax = document.querySelector(".parallax-section");
  const fadeInText = document.querySelector(".fade-in-text");
  const text = fadeInText.textContent.trim();
  window.addEventListener("scroll",()=>{
  const parallaxSpeed = 0.5;
  const scrollPosition = window.scrollY || window.pageYOffset;
  const height = parallax.offsetTop;
  const parallaxOffset = (height - scrollPosition)* parallaxSpeed;
  parallax.style.backgroundPosition = `50% ${parallaxOffset}px`;
  });
  fadeInText.textContent='';
  text.split('').forEach((char,i)=>{
  const charSpan=document.createElement('span');
  charSpan.textContent=char;
  charSpan.style.opacity='0';
  fadeInText.appendChild(charSpan);
  setTimeout(()=>{
  charSpan.style.opacity='1';
  charSpan.style.transition='opacity 1s ease-out';
  },
  i*100);
  });
});

