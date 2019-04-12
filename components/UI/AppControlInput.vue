<template>
  <div class="input-control">
    <label class="input-control__label"><slot /></label>
    <input
      class="input-control__input"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      class="input-control__textarea"
      v-if="controlType === 'textarea'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input-control {
    margin: 10px 0;
  }

  .input-control__label {
    display: block;
    font-weight: bold;
  }

  .input-control__input,
  .input-control__textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    padding: 5px;
  }

  .input-control__input:focus,
  .input-control__textarea:focus {
    background-color: #eee;
    outline: none;
  }
</style>


