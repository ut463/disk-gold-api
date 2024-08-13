console.log('disc');
const discBtns = document.querySelectorAll('.disc-btn'); // [];

const handleAdd = (event) => {

    const disc_id = event.target.getAttribute('data-disc');
    console.log(disc_id);
    // fetch request
};

discBtns.forEach((btnEl) => {
    btnEl.addEventListener('click', handleAdd);
});


