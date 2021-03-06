import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

// Требуется создать Vue приложение
const app = new Vue({
  el: '#app',
  data() {
    return {
      rawMeetup: null
    }
  },

  computed: {
    image() {
      return this.rawMeetup.imageId ? { '--bg-url': `url(${getImageUrlByImageId(this.rawMeetup.imageId)})` } : ''
    },

    meetups() {
      if (!this.rawMeetup) {
        return null
      }

      let meetups = Object.assign({}, this.rawMeetup);
      meetups['agenda'] = meetups.agenda.map((ag) => ({
        ...ag,
        icon: `/assets/icons/icon-${agendaItemIcons[ag.type]}.svg`,
        title: ag.title ? ag.title : agendaItemDefaultTitles[ag.type], 
      }))
      return meetups
    }
  },

  mounted() {
    fetch(`https://course-vue.javascript.ru/api/meetups/${MEETUP_ID}`)
      .then(res => res.json())
      .then(data => {
        this.rawMeetup = data
      })    
  }
})

app.$mount('#app');