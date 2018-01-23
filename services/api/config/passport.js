const PassportJWT = require('passport-jwt'),
	ExtractJWT = PassportJWT.ExtractJwt,
	Strategy = PassportJWT.Strategy,
	config = require('./index.js'),
	models = require('@api/app/setup');

	module.exports = (passport) => { 
		const User = modeels.User;
		
		const parameters = {
			secretOrKey: config.secret,
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
		};

		passport.user(new Strategy(parameters, (payload, done) => {
			User.findOne({ id: payload.id }, (error, user) => {
				if (error) return done(error, false);
				if (user) done(null, false);
				else done(null, false);
			});
		}));
		}

