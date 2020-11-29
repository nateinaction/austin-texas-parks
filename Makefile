build: setup
	npm run build

.PHONY: clean
clean:
	rm -rf node_modules
	rm public/parks.json

.PHONY: setup
setup: public/parks.json node_modules

public/parks.json:
	npx csvtojson src/parks.csv > src/parks.json

node_modules:
	npm install

.PHONY: start
start: setup
	npm run start

.PHONY: preview
preview: build
	wrangler publish

.PHONY: deploy
deploy: build
	wrangler publish -e production
