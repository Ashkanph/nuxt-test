<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  font: inherit;
  background-color: black;
  color: #ccc;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button:hover,
.button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}

.button_color_inverted {
  background-color: white;
  color: #6c757d;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button_color_inverted:hover,
.button_color_inverted:active {
  color: #444;
  background-color: white;
  border: 1px solid #aaa;
}

.button_color_red {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.button_color_red:hover,
.button_color_red:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}

.button:disabled,
.button:disabled:hover{
  color: #ccc;
  border: 1px solid #ccc;
  cursor: default;
}
</style>
