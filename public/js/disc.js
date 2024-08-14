console.log('disc');
const discBtns = document.querySelectorAll('.disc-btn'); // [];

const handleAdd = async (event) => {
    try {
        const disc_id = event.target.getAttribute('data-disc');
        console.log(disc_id);
        // fetch request

        const response = await fetch('/api/discs', {
            method: 'POST',
            body: JSON.stringify({disc_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        
    } catch (err) {
        console.log(err);
    }
};

discBtns.forEach((btnEl) => {
    btnEl.addEventListener('click', handleAdd);
});


