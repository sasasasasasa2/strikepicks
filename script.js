// JavaScript to handle funnel interactions and FAQ toggling
document.addEventListener('DOMContentLoaded', () => {
    const depositBtn = document.querySelector('.deposit-btn');
    const privateSection = document.getElementById('private');

    // Check if deposit was confirmed in previous session
    if (localStorage.getItem('depositDone') === 'true') {
        privateSection.classList.remove('hidden');
        // If deposit was done, disable the button and update its text
        if (depositBtn) {
            depositBtn.textContent = 'Depósito confirmado';
            depositBtn.disabled = true;
            depositBtn.classList.add('disabled');
        }
    }

    // Handle deposit confirmation
    if (depositBtn) {
        depositBtn.addEventListener('click', () => {
            // Save state in localStorage
            localStorage.setItem('depositDone', 'true');
            // Reveal private section
            privateSection.classList.remove('hidden');
            // Update button appearance
            depositBtn.textContent = 'Depósito confirmado';
            depositBtn.disabled = true;
            depositBtn.classList.add('disabled');
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});