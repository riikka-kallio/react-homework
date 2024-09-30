/* eslint-disable */

export default function ListItem({name='', age, hobbies=''}) {
  return (
    <li><p>{name}</p> <p>({age})</p> <p>{hobbies}</p><button onClick={() => hello(name, age, hobbies)}>Click me</button></li>
    
    
  )
}

function hello(name, age, hobbies) {
    alert(`My name is ${name} and I am ${age} years old. My favourite hobby is ${hobbies}.`)
}