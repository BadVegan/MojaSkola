import axios from 'axios';

export function getGroups() {
  axios
    .get('http://localhost:3004/listGroup')
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
