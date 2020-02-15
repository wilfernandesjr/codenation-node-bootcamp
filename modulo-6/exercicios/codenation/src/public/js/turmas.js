const $form = document.querySelector('[data-create-form]')

$form.addEventListener('submit', e => {
  e.preventDefault()

  const data = {
    name: $form.querySelector('[data-create-form-name]').value,
    github: $form.querySelector('[data-create-form-github]').value,
    company: $form.querySelector('[data-create-form-company]').value,
    start: $form.querySelector('[data-create-form-start]').value,
    finish: $form.querySelector('[data-create-form-finish]').value
  }

  fetch('/v1/classes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    const evt = new CustomEvent('render')
    document.dispatchEvent(evt)
  })

})

const $table = document.querySelector('[data-classes]')

const getClasses = async () => {
  const classes = await fetch('/v1/classes').then(res => res.json())

  $table.innerHTML = ''

  if (!classes.total) {
    $table.insertAdjacentHTML('beforeend', '<span style="display: block; text-align: center; padding: 20px;">Nenhuma turma cadastrada :(</span>')

    return
  }

  classes.data.forEach(item => {
    $table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td><a href='${item.github}' target='_blank'>GitHub</a></td>
        <td>${item.company}</td>
        <td>${item.start.slice(0,10)}</td>
        <td>${item.finish.slice(0,10)}</td>
        <td><button data-remove-class='${item.id}'>Remover</button></td>
      </tr>
    `)
  })
}

getClasses()

document.addEventListener('render', getClasses)

document.addEventListener('click', e => {
  if (!e.target.matches('[data-remove-class]')) return

  const id = e.target.getAttribute('data-remove-class')

  fetch(`/v1/classes/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(() => {
    const evt = new CustomEvent('render')
    document.dispatchEvent(evt)
  })
})