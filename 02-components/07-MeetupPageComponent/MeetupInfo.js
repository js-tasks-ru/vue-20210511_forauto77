export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
  },

  computed: {
    localeDate() {
      return this.date.toLocaleString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'})
    },
    stringDate() {
      return this.date.toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="stringDate">{{ localeDate }}</time>
      </li>
    </ul>`,
};
