![UI5-logo](docs/imgs/ui5-svelte-logo.png)

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/ui5-webcomponents-sample-svelte)](https://api.reuse.software/info/github.com/SAP-samples/ui5-webcomponents-sample-svelte)

# **UI5 Web Components Sample ToDo App**
### ***Sample ToDo application that demonstrates the usage of [UI5 Web Components](https://sap.github.io/ui5-webcomponents/) using [Svelte](https://svelte.dev/)***

The application showcases how to: bind properties, subscribe to and forward events, and consume UI5 Web Components within Svelte.

Project was initialized uising **[ViteJs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)** and the **svelte-ts** tempalte

## **Requirements**
- **[Node.js](https://nodejs.org/en/) version >=12.0.0.**

## **Download and Installation**
1. **[Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)** and navigate to the downloaded directory
    ```sh
    git clone https://github.com/SAP-samples/ui5-webcomponents-sample-svelte.git
    cd ui5-webcomponents-sample-svelte
    ```
2. Install all dependencies
   ```sh
   yarn
   ```
3. Start the local dev server and run the application
   ```sh
   yarn dev
   ```

## **How to obtain support**
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## **Noteworthy**
 
### Consuming UI5 Web Components in Svelte Applications
- Import the desired component(s) in your app to define the UI5 Web Component.
 
- For example, to use `ui5-button` you need to import it:
  ```js
  import "@ui5/webcomponents/dist/Button"; // loads ui5-button
  ```
  Then, you can use the custom element in an HTML page:
  ```html
  <ui5-button>Hello world!</ui5-button>
  ```

## **Browser support**

Currently Chrome, Safari, Firefox and Edge (Chromium-based) support Web Components natively.


## **Contributing**
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## **License**
Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
