document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiStepForm');
    const formSteps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    formSteps[currentStep].classList.add('active');

    function showStep(step) {
        formSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
    }

    document.querySelectorAll('.nextBtn').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll('.prevBtn').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
            form.reset();
            currentStep = 0;
            showStep(currentStep);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Form submission failed!');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
       duration: 2000, 
    });
 });


document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-animation'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.image-animation').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.text-animation').forEach(element => {
        observer.observe(element);
    });
});


document.getElementById("item2").addEventListener('click',function(e){
        e.preventDefault();

document.getElementById("services").scrollrollIntoView({behavior:'smooth'});
});
document.getElementById("item3").addEventListener('click',function(e){
    e.preventDefault();

document.getElementById("contact").scrollrollIntoView({behavior:'smooth'});
});
document.getElementById("item4").addEventListener('click',function(e){
    e.preventDefault();

document.getElementById("about").scrollrollIntoView({behavior:'smooth'});
});
