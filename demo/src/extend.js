import axios from '../../src/main'

axios({
  url: '/api/extend/post',
  method: 'post',
  data: {
    msg: 'hi',
  },
})

axios.request({
  url: '/api/extend/post',
  method: 'post',
  data: {
    msg: 'hello',
  },
})

// axios.get('/api/extend/get')

// axios.options('/api/extend/options')

// axios.delete('/api/extend/delete')

// axios.head('/api/extend/head')

// axios.post('/api/extend/post', { msg: 'post' })

// axios.put('/api/extend/put', { msg: 'put' })

// axios.patch('/extend/patch', { msg: 'patch' })

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })
//
// axios('/extend/post', {
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })

// interface ResponseData<T = any> {
//   code: number
//   result: T
//   message: string
// }

// interface User {
//   name: string
//   age: number
// }

// function getUser<T>() {
//   return axios<ResponseData<T>>('/extend/user')
//     .then(res => res.data)
//     .catch(err => console.error(err))
// }

// async function test() {
//   const user = await getUser<User>()
//   if (user) {
//     console.log(user.result.name)
//   }
// }

// test()
