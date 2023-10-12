# OpenLayers + Rollup

This example demonstrates how the [`ol` package](https://www.npmjs.com/package/ol) can be used with Rollup.

Clone the project.

    git clone git@github.com:openlayers/ol-rollup.git

Install the project dependencies.

    cd ol-rollup
    npm install

Create a bundle for the browser.

    npm run build

Open `index.html` to see the result.

    open index.html

## Alternatively,

Build the container with:

```bash
docker build -t ol-rollup .
```

Then copy the bundle to the host with:

```bash
docker run --rm -v $(pwd):/pwd ol-rollup cp /app/ol-custom.js /pwd
```
