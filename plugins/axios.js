export default function ({ $axios, redirect }, inject) {
  let rest = $axios.create({
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    },
    timeout: 10 * 1000
  })
  rest.onResponse(res => res.data)
  rest.setHeader('Content-Type', 'application/json')
  rest.setBaseURL(process.env.API_URL)
  rest.onError(err => {
    const error = Object.assign(err, {})
    const code = parseInt(error.response && error.response.status)
    if (code === 400) redirect('/error/400')
    if (!code || code === 500) redirect('/error/500')
  })
  // Inject to context as $rest
  inject('rest', rest)
}
