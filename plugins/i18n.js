import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'vi',
    messages: {
      vi: require('~/assets/i18n/vi.json'),
      en: require('~/assets/i18n/en.json')
    }
  })
}
