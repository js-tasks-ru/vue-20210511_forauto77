import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array
    }
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item
        v-for="agendaItem in agenda" :agenda-item="agendaItem"></meetup-agenda-item>
    </div>`,
};

export default MeetupAgenda;
