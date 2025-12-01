window.onload = function() {
   var backTopBtn = document.querySelector('.back-top');
   window.addEventListener('scroll', function() {
     backTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
   });
   backTopBtn.onclick = function() {
     window.scrollTo(0, 0);
   };

   var emailBtn = document.querySelector('.contact-buttons .btn:nth-child(2)');
   var toast = document.querySelector('.copy-toast');
   var confirmBtn = document.querySelector('.confirm-btn');
   emailBtn.onclick = function() {
     toast.style.display = 'block';
     if (navigator.clipboard) {
       navigator.clipboard.writeText('newthread_geek@outlook.com');
     }
   };
   confirmBtn.onclick = function() {
     toast.style.display = 'none';
   };

   var biliBtn = document.getElementById('bili-btn');
   biliBtn.onclick = function(e){
    e.preventDefault();
    window.open(this.href,'_blank');
   }
 };

window.addEventListener('load', function() {
  const questionLis = document.querySelectorAll('.qa-list li');
  questionLis.forEach(function(li) {
    const answerBox = li.querySelector('.qa-answer');
    li.onclick = function() {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        answerBox.style.height = 'auto';
        answerBox.style.opacity = '1';
        answerBox.style.padding = '12px 18px';
      } else {
        answerBox.style.height = '0';
        answerBox.style.opacity = '0';
        answerBox.style.padding = '0 18px';
      }
    };
  });
});

