const toHTML = ({
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
      </main>
    </body>
  </html>
`)

module.exports = { toHTML }
