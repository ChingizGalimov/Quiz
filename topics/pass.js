const joke = [
    {
      type: 'input',
      name: 'cardNumber',
      message: 'Введите номер банковской карты 0000-0000-0000-0000',
      validate(value) {
        const pass = value.match(
          /(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})/,
        );
        if (pass) {
          return true;
        }
        return 'Введите корректный номер карты в формате 0000-0000-0000-0000';
      }
    },
    {
      type: 'input',
      name: 'validityPeriod',
      message: 'Введите срок действия карты в формате мм/гг',
      validate(value) {
        const pass = value.match(
          /^(0[1-9]|1[0-2])\/\d{2}$/gi,
        );
        if (pass) {
          return true;
        }
        return 'Введите корректный срок действия в формате мм/гг';
      }
    },
    {
      type: 'input',
      name: 'cvv',
      message: 'Введите cvv',
      validate(value) {
        const pass = value.match(
          /\b\d{3}\b/gi,
        );
        if (pass) {
          return true;
        }
        return 'Введите корректный cvv';
      }
    }
  ];
  
  module.exports = joke;