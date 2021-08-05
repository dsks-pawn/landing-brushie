<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="option in options" :key="option">
        {{ option.value }}
      </option>
    </select>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    ...mapState('i18n', ['locale', 'locales', 'options']),
  },
  watch: {
    selected() {
      this.setLang()
    },
  },
  beforeCreate() {},
  created() {
    if (this.$i18n.locale) {
      this.selected = this.$i18n.locale
    } else {
      this.selected = this.locale
    }
    this.selected = this.locale
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    setLang() {
      this.$i18n.locale = this.selected
      this.$store.dispatch('i18n/setLang', this.selected)
    },
  },
}
</script>
