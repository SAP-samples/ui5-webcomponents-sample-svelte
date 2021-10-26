![UI5-logo](docs/imgs/UI5-logo.png)

# **UI5 Web Components Svelte Application**
### ***Sample ToDo application that demonstrates the usage of [UI5 Web Components](https://sap.github.io/ui5-webcomponents/) using [Svelte](https://svelte.dev/)***

The application showcases how to:
  - Bind properties
  - Subscribe to events
  - Use nested components 

Project was initialized uising **[ViteJs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)** and the **svelte-ts** tempalte

## **Prerequisites**
- **[Node.js](https://nodejs.org/en/) version >=12.0.0.**

## **Getting Started**
1. **[Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)** and navigate to the downloaded directory
    ```sh
    git clone https://github.tools.sap/I546507/ui5-webcomponents-sample-svelte.git
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

## **Noteworthy**
 
### Consume UI5 Web Components
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

- Currently only Chrome, Safari and Firefox support Web Components natively.

- If your application should run on browsers without native Web Components support (Edge and/or IE11), import one the following modules before your first Web Component import: 
- ### Edge only
  ```js
  import "@ui5/webcomponents-base/dist/features/browsersupport/Edge";
  ```

- ### Edge and IE11
  ```js
  import "@ui5/webcomponents-base/dist/features/browsersupport/IE11";
  ```
  ***Note:*** Importing the module for IE11 support automatically enables Edge support as well, so there is no need to import them both explicitly.

  **Example:**

  ```js
  import "@ui5/webcomponents-base/dist/features/browsersupport/IE11"; // This will enable Edge and IE11 support for all Web Components below
  import "@ui5/webcomponents/dist/Button"; // loads ui5-button
  import "@ui5/webcomponents/dist/Label"; // loads ui5-label
  ```