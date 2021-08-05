<template>
  <div>
    <a
      v-if="locale !== 'en'"
      href="javascript:void(0);"
      class="btn btn-default btn-success"
      @click="changeLanguage('en')"
      >{{$t('locale.en')}}</a
    >
    <a
      v-if="locale !== 'vi'"
      href="javascript:void(0);"
      class="btn btn-default btn-success"
      @click="changeLanguage('vi')"
      >{{$t('locale.vi')}}</a
    >
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('i18n', ['locale'])
  },
  methods: {
    changeLanguage(lang) {
      this.$store.commit('i18n/SET_LANG', lang)
      this.$i18n.locale = lang;
    }
  }
}
</script>
