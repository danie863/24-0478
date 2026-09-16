document.addEventListener('DOMContentLoaded', () => {
  const speedRanges = {
    'RoboDrive Scout': '8-15 km/h', 'RoboDrive City': '15-25 km/h', 'RoboDrive Pro': '30-45 km/h',
    'TerraTrack T1': '6-12 km/h', 'TerraTrack X2': '10-18 km/h', 'CargoPilot C1': '5-12 km/h',
    'CargoPilot XL': '5-10 km/h', 'Guardian G4': '8-16 km/h', 'Guardian Night': '6-12 km/h',
    'RescueRunner R1': '4-10 km/h', 'RescueRunner M2': '3-8 km/h', 'LearnBug L1': '2-6 km/h',
    'LearnBug Duo': '3-8 km/h', 'CleanCruise C2': '2-5 km/h', 'CleanCruise Pro': '3-7 km/h',
    'AquaScout A1': '4-10 km/h', 'AquaScout Deep': '2-6 km/h', 'RoboTaxi E1': '25-45 km/h',
    'RoboTaxi L2': '20-35 km/h', 'RoboSport S9': '40-70 km/h'
  };
  const registrationForm = document.querySelector('#registration-form');
  if (registrationForm) {
    const message = document.querySelector('#form-message');
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!registrationForm.checkValidity()) {
        message.textContent = 'Please complete your name, email and consent to continue.';
        message.className = 'form-message error';
        registrationForm.reportValidity();
        return;
      }
      const name = document.querySelector('#name').value.trim().split(' ')[0];
      localStorage.setItem('robomart-authorized', 'true');
      message.textContent = `You are on the list, ${name}. The portfolio is now unlocked.`;
      message.className = 'form-message success';
      registrationForm.reset();
    });
  }

  const accessForm = document.querySelector('#portfolio-access-form');
  const catalog = document.querySelector('#portfolio-catalog');
  const accessPanel = document.querySelector('#access-panel');
  const unlockPortfolio = () => {
    if (!catalog || !accessPanel) return;
    catalog.classList.remove('is-locked');
    catalog.setAttribute('aria-hidden', 'false');
    accessPanel.classList.add('access-complete');
  };
  if (localStorage.getItem('robomart-authorized') === 'true') unlockPortfolio();
  if (accessForm) {
    accessForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.querySelector('#access-message');
      if (!accessForm.checkValidity()) {
        message.textContent = 'Please enter your name and a valid email address.';
        message.className = 'form-message error';
        accessForm.reportValidity();
        return;
      }
      localStorage.setItem('robomart-authorized', 'true');
      message.textContent = 'Access granted. Welcome to the portfolio.';
      message.className = 'form-message success';
      unlockPortfolio();
    });
  }

  const modal = document.querySelector('#product-modal');
  const closeModal = () => { if (modal) modal.hidden = true; };
  document.querySelectorAll('.car-card').forEach((card) => {
    card.querySelector('.car-image').addEventListener('click', () => {
      document.querySelector('#modal-title').textContent = card.dataset.name;
      document.querySelector('#modal-speed').textContent = speedRanges[card.dataset.name] || 'Speed varies by setting';
      document.querySelector('#modal-use').textContent = card.dataset.use;
      document.querySelector('#modal-price').textContent = card.dataset.price;
      modal.hidden = false;
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
  const paymentForm = document.querySelector('#payment-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.querySelector('#payment-message');
      if (!paymentForm.checkValidity()) {
        message.textContent = 'Please complete all payment fields.';
        message.className = 'form-message error';
        paymentForm.reportValidity();
        return;
      }
      message.textContent = 'Payment details received. We will contact you to confirm the order.';
      message.className = 'form-message success';
      paymentForm.reset();
    });
  }
  const guideModal = document.querySelector('#guide-modal');
  const closeGuideModal = () => { if (guideModal) guideModal.hidden = true; };
  document.querySelectorAll('.guide-card').forEach((card) => {
    const image = card.querySelector('.guide-image');
    if (!image || !guideModal) return;
    const price = document.createElement('strong');
    price.className = 'guide-price';
    price.textContent = card.dataset.price;
    card.querySelector('.guide-copy').appendChild(price);
    image.addEventListener('click', () => {
      document.querySelector('#guide-modal-title').textContent = card.dataset.name;
      document.querySelector('#guide-modal-concept').textContent = card.dataset.concept;
      document.querySelector('#guide-modal-price').textContent = card.dataset.price;
      guideModal.hidden = false;
    });
  });
  document.querySelectorAll('[data-close-guide-modal]').forEach((button) => button.addEventListener('click', closeGuideModal));
  const guidePaymentForm = document.querySelector('#guide-payment-form');
  if (guidePaymentForm) {
    guidePaymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.querySelector('#guide-payment-message');
      if (!guidePaymentForm.checkValidity()) {
        message.textContent = 'Please enter a valid name, email and M-Pesa number.';
        message.className = 'form-message error';
        guidePaymentForm.reportValidity();
        return;
      }
      message.textContent = 'Request received. Secure payment instructions will follow after confirmation.';
      message.className = 'form-message success';
      guidePaymentForm.reset();
    });
  }
  const kioskModal = document.querySelector('#kiosk-modal');
  const closeKioskModal = () => { if (kioskModal) kioskModal.hidden = true; };
  document.querySelectorAll('.kiosk-machine').forEach((machine) => {
    machine.querySelector('.kiosk-machine-image').addEventListener('click', () => {
      document.querySelector('#kiosk-modal-title').textContent = machine.dataset.name;
      document.querySelector('#kiosk-modal-place').textContent = machine.dataset.place;
      document.querySelector('#kiosk-modal-note').textContent = machine.dataset.note;
      document.querySelector('#kiosk-modal-price').textContent = machine.dataset.price;
      if (kioskModal) kioskModal.hidden = false;
    });
  });
  document.querySelectorAll('[data-close-kiosk-modal]').forEach((button) => button.addEventListener('click', closeKioskModal));
  const kioskPaymentForm = document.querySelector('#kiosk-payment-form');
  if (kioskPaymentForm) {
    kioskPaymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.querySelector('#kiosk-payment-message');
      if (!kioskPaymentForm.checkValidity()) {
        message.textContent = 'Please enter a valid name, email and M-Pesa number.';
        message.className = 'form-message error';
        kioskPaymentForm.reportValidity();
        return;
      }
      message.textContent = 'Request received. We will confirm the quotation before payment.';
      message.className = 'form-message success';
      kioskPaymentForm.reset();
    });
  }
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeGuideModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeKioskModal(); });
});