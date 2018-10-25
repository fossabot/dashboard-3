[![Build Status](https://travis-ci.com/go-home-io/dashboard.svg?branch=master)](https://travis-ci.com/go-home-io/dashboard)

[go-home](https://go-home.io) web dashboard.

#### Development environemnt

Install all dependencies:

```bash
make dep
```

To run standalone dev server execute: 

```bash
make run
```

To build and generate [statik](https://github.com/rakyll/statik) data for the server use the following target (presumably you have server in `${GOPATH}/src/go-home.io/x/server`):

```bash
make build-to-server
```

#### Preparing commit

To run all required validations simply run:

```bash
gmake git
```

Which includes: 
* `lint` -- running `eslint` with auto-fix enabled