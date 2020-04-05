// const _users = [
//         {
//           "address": {
//             "city": "Los Angeles",
//             "state": 'California',
//             "pincode": "123"
//           },
//           "tags": [
//             "music",
//             "blogs",
//             "cricket"
//           ],
//           "name": "Tom Benzamin"
//         },
//           {
//           "address": {
//             "city": "赣州",
//             "state": '江西',
//             "pincode": "332200"
//           },
//           "tags": [
//             "coding",
//             "run",
//             "swim"
//           ],
//           "name": "周末"
//         },
//           {
//           "address": {
//             "city": "九江",
//             "state": '江西',
//             "pincode": "123456"
//           },
//           "tags": [
//             "study",
//             "go hiking"
//           ],
//           "name": "周小米"
//         },
//           {
//           "address": {
//             "city": "南昌",
//             "state": '江西',
//             "pincode": "88888888"
//           },
//           "tags": [
//             "music",
//             "blogs",
//             "cricket"
//           ],
//           "name": "周小莫"
//         }
// ]
export default {
    fetchUsers(cb) {
      // setTimeout(() => {
      //   cb(_users);
      // }, 1000)
      fetch('/api/users')
        .then(data => data.json())
        .then(data => {
          console.log(data, '--------api')
          cb(data)
        })
        .catch(err => {
          cb(err)
        })
    },
    fetchUsersByTag(tag, cb) {
      fetch(`api/users/tag/${tag}`)
      .then(data => data.json())
      .then(data => {
        cb(data)
      })
    }
  }