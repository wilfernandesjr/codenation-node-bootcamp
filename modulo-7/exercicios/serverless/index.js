const helloWorld = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello, world!' }),
    }

    callback(null, response)
}

module.exports.handler = helloWorld
