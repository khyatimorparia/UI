// async function main() {
// 	const MongoClient = require('mongodb').MongoClient;
// 	const url =
// 	  'mongodb+srv://dbUser:<knmorparia>@cluster0.dcu5m.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
// 	const client = new MongoClient(url, { useNewUrlParser: true }, {useUnifiedTopology: true});
// 	client.connect((err) => {
// 	  const collection = client.db('test').collection('devices');
// 	  // perform actions on the collection object
// 	  client.close();
// 	});
//   }
//   main().catch(console.error);