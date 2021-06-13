const CounterButton = {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  model: {
    prop: 'count',
    event: 'increment'
  },

  methods: {
    increment(value) {
      this.$emit('increment', value + 1)
    }
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="increment(count)">{{ count }}</button>`,
};

export default CounterButton;
