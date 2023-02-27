install:
	npm ci

lint:
	npm run lint

lint-fix:
	npm run lint:fix

run:
	make install
	npm run dev

format:
	npm run format
