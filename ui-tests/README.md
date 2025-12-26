# Integration Testing

This folder contains the integration tests of the extension.

They are defined using [Playwright](https://playwright.dev/docs/intro) test runner
and [Galata](https://github.com/jupyterlab/jupyterlab/tree/main/galata) helper.

The Playwright configuration is defined in [playwright.config.js](./playwright.config.js).

The JupyterLab server configuration to use for the integration test is defined
in [jupyter_server_test_config.py](./jupyter_server_test_config.py).

The default configuration will produce video for failing tests and an HTML report.

## Prerequisites

> All commands are assumed to be executed from the root directory

Before running any tests, ensure the extension is compiled and test dependencies are installed:

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

2. Install test dependencies (needed only once):

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
cd ..
```

## Run the tests

Execute the [Playwright](https://playwright.dev/docs/intro) tests:

```sh
cd ./ui-tests
jlpm playwright test
```

Test results will be shown in the terminal. To view the detailed HTML test report,
use `jlpm playwright show-report` to serve the results in your browser; see
[Playwright documentation](https://playwright.dev/docs/test-reporters#html-reporter)
for more information.

## Run tests in UI Mode

Run tests with UI Mode for watch mode, live step view, time travel debugging and more:

```sh
cd ./ui-tests
jlpm playwright test --ui
```

This will open an interactive UI where you can see the test execution in real-time,
step through tests, and debug failures more easily. See the
[Playwright UI Mode documentation](https://playwright.dev/docs/test-ui-mode) for more details.

## Update the tests snapshots

To update the reference snapshots stored in the repository:

```sh
cd ./ui-tests
jlpm playwright test -u
```

> Some discrepancy may occurs between the snapshots generated on your computer and
> the one generated on the CI. To ease updating the snapshots on a PR, you can
> type `please update playwright snapshots` to trigger the update by a bot on the CI.
> Once the bot has computed new snapshots, it will commit them to the PR branch.

## Create tests

To create tests, use the [Playwright code generator](https://playwright.dev/docs/codegen):

1. Start the server:

```sh
cd ./ui-tests
jlpm start
```

2. In **another terminal**, run the code generator:

```sh
cd ./ui-tests
jlpm playwright codegen localhost:8888
```

## Debug tests

To debug tests, use the Playwright [debug mode](https://playwright.dev/docs/debug):

```sh
cd ./ui-tests
jlpm playwright test --debug
```

## Upgrade Playwright and the browsers

To update the web browser versions, you must update the package `@playwright/test`:

```sh
cd ./ui-tests
jlpm up "@playwright/test"
jlpm playwright install
```
