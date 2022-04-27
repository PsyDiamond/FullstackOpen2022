const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const name = 'Peter'
  const age = 33

  return (
  <div>
  <h1>Greetings</h1>
  <Hello name='Maya' age={10+20} />
  <Hello name={name} age={age} />
  <Footer />
  </div>
  )
}

export default App