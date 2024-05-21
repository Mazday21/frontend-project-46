install: 
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

gendiff:
	node gendiff.js -h