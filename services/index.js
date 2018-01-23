require('module-alias/register');
const http = require('http'),
	BudgetAPI = require('@api'),
	BudgetServer = http.Server(api),
	BudgetPort = process.env.PORT || 3001, 
	LOCAL = '0.0.0.0';

	BudgetManagerServer.listen(BudgetPort, LOCAL, () =>
		console.log('budget api running on ${BudgetPort}'));