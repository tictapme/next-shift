const contactForm = document.querySelector('.contact-form');
const { empresa, mensaje, telefono } = contactForm.elements;
const submitContact = contactForm.querySelector('[type="submit"]');
const contactStatus = document.getElementById('contact-status');
const contactTraps = [contactForm.elements._honey, document.getElementById('contact-website')];
const incompleteText = contactStatus.textContent;
const messages = document.documentElement.lang === 'en' ? {
  company: 'Enter your company name.',
  process: 'Tell us which process you want to improve.',
  phone: 'Enter a phone number with 7 to 15 digits, or leave it blank.',
  ready: 'The form is ready to send.'
} : {
  company: 'Indica el nombre de tu empresa.',
  process: 'Cuéntanos qué proceso quieres optimizar.',
  phone: 'Indica un teléfono de 7 a 15 dígitos o deja el campo vacío.',
  ready: 'El formulario está listo para enviar.'
};

function updateContactForm() {
  empresa.setCustomValidity(empresa.value.trim() ? '' : messages.company);
  mensaje.setCustomValidity(mensaje.value.trim() ? '' : messages.process);
  const phone = telefono.value.trim();
  const phoneValid = !phone || (/^\+?[\d\s().-]+$/.test(phone) && /^\d{7,15}$/.test(phone.replace(/\D/g, '')));
  telefono.setCustomValidity(phoneValid ? '' : messages.phone);

  const valid = Array.from(contactForm.elements).every(field => !field.willValidate || field.validity.valid);
  submitContact.disabled = !valid;
  const status = !phoneValid ? telefono.validationMessage : valid ? messages.ready : incompleteText;
  if (contactStatus.textContent !== status) contactStatus.textContent = status;
  return valid;
}

contactForm.addEventListener('input', updateContactForm);
contactForm.addEventListener('change', updateContactForm);
window.addEventListener('pageshow', updateContactForm);
contactForm.addEventListener('submit', event => {
  if (!updateContactForm()) {
    event.preventDefault();
    contactForm.reportValidity();
  } else if (contactTraps.some(field => field.value !== '')) {
    event.preventDefault();
  }
});
updateContactForm();
