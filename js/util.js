const sameValue = (currentValue, changeValue) => {
  changeValue.value = currentValue.value;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export {sameValue, showAlert};


