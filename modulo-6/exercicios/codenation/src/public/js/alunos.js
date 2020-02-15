const $form = document.querySelector('[data-create-form]')

$form.addEventListener('submit', e => {
  e.preventDefault()

  const data = {
    name: $form.querySelector('[data-create-form-name]').value,
    username: $form.querySelector('[data-create-form-username]').value,
    email: $form.querySelector('[data-create-form-email]').value,
    linkedin: $form.querySelector('[data-create-form-linkedin]').value,
    github: $form.querySelector('[data-create-form-github]').value,
    level: $form.querySelector('[data-create-form-level]').value
  }

  fetch('/v1/students', {
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

const $table = document.querySelector('[data-students]')

const getStudents = async () => {
  const students = await fetch('/v1/students').then(res => res.json())

  $table.innerHTML = ''

  if (!students.total) {
    $table.insertAdjacentHTML('beforeend', '<span style="display: block; text-align: center; padding: 20px;">Nenhum aluno cadastrado :(</span>')

    return
  }

  students.data.forEach(student => {
    $table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${student.id}</td>
        <td><img src='${student.avatar}' width='60'></td>
        <td>${student.name}</td>
        <td>
          <a href='/alunos.html?id=${student.id}'>${student.username}</a>
        </td>
        <td>${student.email}</td>
        <td><a href='${student.linkedin}' target='_blank'>LinkedIn</a></td>
        <td><a href='${student.github}' target='_blank'>GitHub</a></td>
        <td>${student.level || 'N/A'}</td>
        <td><button data-remove-student='${student.id}'>Remover</button></td>
      </tr>
    `)
  })
}

getStudents()

document.addEventListener('render', getStudents)

document.addEventListener('click', e => {
  if (!e.target.matches('[data-remove-student]')) return

  const id = e.target.getAttribute('data-remove-student')

  fetch(`/v1/students/${id}`, {
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