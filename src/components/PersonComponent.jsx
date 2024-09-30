/* eslint-disable */

export default function PersonComponent({name, age, hobbies}) {
    console.log(name, age, hobbies)
  return (
    <p>My name is {name} and I am {age} years old. My favourite hobby is {hobbies}.</p>
  )
}
