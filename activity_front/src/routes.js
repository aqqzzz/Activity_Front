import Loadable from 'react-loadable'

const Homepage = Loadable({
  loader: import('./containers/Hello'),
  loading: <div>loading....</div>
})

const routes = 