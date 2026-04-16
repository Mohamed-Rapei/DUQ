document.querySelectorAll('.sidebar nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar nav ul li').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


//  تنبيه عند الضغط على زر التصفح
const browseBtn = document.querySelector('.browse-btn');
browseBtn.addEventListener('click', () => {
    alert("Redirecting to deals page...");
});