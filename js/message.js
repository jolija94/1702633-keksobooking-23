const SUCCESS = document.querySelector('#success').content.querySelector('.success');
const ERROR = document.querySelector('#error').content.querySelector('.error');
const ESCAPE = 'escape';

const noticeField = document.querySelector('.notice');

const getMessage = (value) => {
  const messagePopUp = value.cloneNode(true);

  noticeField.append(messagePopUp);

  document.body.addEventListener('click', () => {

    messagePopUp.remove();
  });
  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      messagePopUp.remove();
    }
  });
};

export { getMessage, SUCCESS, ERROR};

