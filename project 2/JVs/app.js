document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#registration-form');
  if (!form) return;

  const message = document.querySelector('#form-message');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      message.textContent = 'Please complete your name, email and consent to continue.';
      message.className = 'form-message error';
      form.reportValidity();
      return;
    }

    const name = document.querySelector('#name').value.trim().split(' ')[0];
    message.textContent = `You are on the list, ${name}. Welcome to RoboMart.`;
    message.className = 'form-message success';
    form.reset();
  });
});