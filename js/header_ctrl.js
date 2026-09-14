document.addEventListener("DOMContentLoaded", (e) => {
    event_setup();
});


function event_setup() {
    const hd_mb_folded = document.querySelector('.folded');
    const hd_mb_toggles = document.querySelectorAll('.menu_list span');
    const hd_mb_spread = document.querySelector('.spread');
    const hd_mb_close = document.querySelector('.menu_close');
    const dimmed = document.querySelector('.dimmed');

    hd_mb_close.addEventListener('click', () => {
        dimmed.style.display = 'none';
        hd_mb_spread.style.display = 'none';
        hd_mb_folded.style.display = 'flex';
        console.log('모달닫기');
    });

    for(toggle of hd_mb_toggles) {
        toggle.addEventListener("click", (event) => {
            dimmed.style.display = 'block';
            hd_mb_spread.style.display = 'flex';
            hd_mb_folded.style.display = 'none';
            console.log('모달열기');
        });
    }
}