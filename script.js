window.onscroll = function() {scrollThingy()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollThingy() {
if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Ensure modal is hidden initially
    modal.style.display = 'none';
    modalImg.style.display = 'none';
    modalVideo.style.display = 'none';

    document.querySelectorAll('.image-item').forEach(item => {
        item.addEventListener('click', () => {
            const mediaType = item.getAttribute('data-type');
            const mediaSrc = item.getAttribute('data-src');

            if (mediaType === 'img') {
                modalImg.src = mediaSrc;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (mediaType === 'video') {
                modalVideo.src = mediaSrc;
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
            }

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = '';
        modalVideo.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
            modalVideo.src = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.container');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
  
    elements.forEach(element => {
        observer.observe(element);
    });
  });
  