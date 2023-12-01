document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const cropName = this.previousElementSibling.previousElementSibling.textContent;
            alert(cropName + ' added to cart');
        });
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        const newsletterForm = document.getElementById('newsletter-form');

        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                alert('Thank you, ' + name + ', for subscribing to the CropCart newsletter!');
            } else {
                alert('Please fill in your name and email.');
            }
        });
    });

