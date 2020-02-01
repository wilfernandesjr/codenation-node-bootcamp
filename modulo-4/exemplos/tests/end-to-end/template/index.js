const getItem = (user) => (
  `<main>
    <img src="${user.profile_pic}">
    <div>
    <h1>${user.name}</h1>
    <p>username: @${user.username}</p>
    <p>last activity: ${new Date(user.last_active_date).getUTCMonth() + 1}/${new Date(user.last_active_date).getFullYear()}</p>
    </div>
  </main>
`)

const toHTML = (users) => (`
  <html>
    <head>
      <title></title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          padding: 0 10%;
          color: #272727;
          font-family: Trebuchet MS;
        }
        h1 {
          font-size: 16px;
        }
        main {
          width: 500px;
          display: flex;
          margin: 30px auto;
          box-sizing: border-box;
          background: #f8f8f8;
          border-radius: 6px;
          padding: 20px;
          box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
        }
        img {
          margin-right: 15px;
          align-self: flex-start;
        }
      </style>
    </head>
    <body>
    ${users.map(getItem).join('')}
    </body>
  </html>
`)

module.exports = { toHTML }
