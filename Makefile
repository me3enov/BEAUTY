install:
	npm ci

lint:
	make install
	npx eslint .

run:
	npm run dev
