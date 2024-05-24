install: 
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

gendiff:
	node gendiff.js file1.json file2.json