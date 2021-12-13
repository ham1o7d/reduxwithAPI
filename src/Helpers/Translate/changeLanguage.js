
const changeLanguage = (language, i18n) => {
  console.log('changeLanguage')
  const currentLanguage = localStorage.getItem("language");
  console.log('currentLanguage', currentLanguage)
  if (currentLanguage) {
  console.log('1')

    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  } else {
  console.log('0')

    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }
};

export default changeLanguage;
