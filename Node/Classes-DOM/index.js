import { Component } from "./generica.js"
import { Form } from "./form-element.js"
import { Input } from "./input-element.js"
import { Label } from "./label-element.js"

const el = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(el)

el.tag = 'h2'
el.build().render()

const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'birthday' })

form.render()

label.render()
form.addChildren(input)

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)