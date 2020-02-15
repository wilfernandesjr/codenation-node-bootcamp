const renderMovie = ({
  rank,
  title,
  genre,
  description,
  director,
  actors,
  year,
  runtime,
  rating,
  votes,
  revenue,
  metascore
}) => (`
  <html>
    <head>
      <title>${title}</title>
      <style>
        main {
          max-width: 600px;
          width: 90%;
          display: block;
          margin: 30px auto;
          box-sizing: border-box;
          background: #f8f8f8;
          border-radius: 6px;
          padding: 20px;
          box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
        }
        small {
          display: block;
        }
        footer {
          display: block;
          width: 100%;
          height: 60px;
          overflow: hidden;
        }
        footer a {
          display: block;
          width: 50%;
          height: 60px;
          line-height: 60px;
          float: left;
          text-align: left;
        }
        footer a:last-child {
          text-align: right;
        }
      </style>
    </head>
    <body>
      <main>
        <small><strong>${genre}</strong></small>
        <h1>#${rank} ${title} (${year})</h1>
        <small>Direct by <strong>${director}</strong></small>
        <small>Starred by <strong>${actors}</strong></small>
        <article>
          <ul>
            <li>Duration: <em>${runtime} minutes.</em></li>
            <li>Revenue: <em>${revenue} millions (US$).</em></li>
            <li>Rating (IMDB): <em>${rating}/10.</em> Based on ${votes} votes.</li>
            <li>MetaScore: <em>${metascore}/100.</em></li>
          </ul>
          <p>${description}</p>
        </article>
        <footer>
          <a data-cy="anterior" href="/movies/${parseInt(rank) - 1}">← Anterior</a>
          <a data-cy="posterior" href="/movies/${parseInt(rank) + 1}">→ Próximo</a>
        </footer>
      </main>
    </body>
  </html>
`)

const renderHome = movies => (`
  <html>
    <head>
      <title>Filmes do IMDB</title>
      <style>
        main {
          max-width: 600px;
          width: 90%;
          display: block;
          margin: 30px auto;
          box-sizing: border-box;
          background: #f8f8f8;
          border-radius: 6px;
          padding: 20px;
          box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
        }
        a {
          display: block;
          height: 40px;
          line-height: 160%;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>Filmes do IMDB</h1>
        ${movies.reduce((acc, cur) => (
          `${acc}<a href="/movies/${cur.rank}">#${cur.rank} - ${cur.title} (${cur.rating}/10)</a>`
        ), '')}
      </main>
    </body>
  </html>
`)

module.exports = {
  renderMovie,
  renderHome
}
