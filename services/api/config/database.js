module.exports = (mongoose, config) => {
	const database = mongoose.connection;
	mongoose.Promise = Promise;

	mongoose.connect(config.database, {
		useMongoClient: true,
		promiseLibrary: global.Promise
	});

	database.on('error', error => console.log('Connection to Budget database failed: ${error}'));

	database.on('connected', () => console.log('Connected to Budget database'));

	database.on('disconnected', () => console.log('Disconnected from Budget database'));

	process.on('SIGINT', () => {
		database.close(() => {
			console.log('Budget Management termination, connection closed');
			process.exit(0);
		});
	});
};