// Получаэмо доступ до елементів
const refs = {
  // openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('.close2'),
  backdrop: document.querySelector('.js-backdrop'),
  success: document.querySelector('.form__message'),
  closeModalBtn2: document.querySelector('.close3'),
};

// на єлементі вішаємо прослушиваніе подій + функії
// refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.closeModalBtn2.addEventListener('click', onClickModal3);

function onClickModal3() {
  refs.success.style.display = 'none';
}
// refs.backdrop.addEventListener('click', closeModalBtn);

// функція
// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
//   document.body.classList.add('is-hidden');
// }

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  document.body.classList.remove('is-hidden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onSuccess() {
  // refs.backdrop.classList.add('is-open');
  refs.success.style.display = 'block';
}

// function onClouseModal2() {}

const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
const CHAT_ID = '-1002084469289';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта Romalex</b>\n`;
  message += `<b>Name: </b> ${this.name.value}\n`;
  message += `<b>Phone: </b> ${this.tel.value}\n`;
  message += `<b>Email: </b> ${this.email.value}\n`;
  // message += `<b>Почта: </b> ${this.date.value}\n`;
  //   message += `<b>Телефон: </b> ${this.phone.value}\n`;
  //   message += `<b>Коментар: </b> ${this.comment.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.email.value = '';
      // this.date.value = '';
      //   this.phone.value = '';
      //   this.comment.value = '';
      //   this.topic.value = '';
      //   this.checkbox.value = '';
      onCloseModal();
      onSuccess();
      // onBackdropClick();
      // success.innerHTML =
      //   '<p class="message">Message sent!</p class="message2"><p>A manager will contact you in 15 minutes!</p>';
      // success.style.display = 'block';
    })
    .catch(error => {
      console.varn(error);
    })
    .finally(() => {
      console.log('Конец');
    });
});
