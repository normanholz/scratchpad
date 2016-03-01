test:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive -u bdd -R tap -t 1000 './test/*.js'

lint:
	@jshint --exclude=node_modules/ .

.PHONY: test