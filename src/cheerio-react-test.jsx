import http from 'k6/http';
import { check } from 'k6';

export default function () {

  return <HomePage name="behnam" />
}

function HomePage({name}){
  const res = http.get('https://loadimpact.com/');

  console.log(name, res.headers);

  check(res, {
    'is 200 success': () => res.status === 200,
  })
  
  return null;
}