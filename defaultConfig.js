module.exports = {
  directories: {
    models: 'db/models',
    routes: 'server',
    reducers: 'app/reducers',
    components: 'app/components'
  },
  exclude: [
    'Jokes.jsx',
    'Jokes.test.jsx',
    'auth.js',
    'out.js',
  ],
  reduxStore: 'app/store.jsx',
  dbInstance: 'db/index.js',
}