

## 1. What is `NPM`?

- It is a package manager for JavaScript that allows developers to easily manage and share reusable code packages. 
- We initialise it into our existing project using `npm init` which result in package.json file.


## 2. What is `parcel/webpack`? Why do we need it?
They are module bundlers which are tools used in web development to combine multiple separate files, such as JavaScript, CSS, and images, into a single file or a few files.  It ensure that the code is delivered to end-users in an efficient and optimized manner.

## 3. What is `.parcel-cache`?

The `.parcel-cache` directory is a folder created by the Parcel bundler along with dist. It is used to cache various files and data to improve build performance. `.parcel-cache` directories are specific to your project and can be safely deleted if you want to clear the cache. Parcel will recreate it as needed. Subsequent bulid will reduce time.

## 4. What is `npx`?

`npx` is a useful tool for executing packages from the command line, and it's commonly used in modern JavaScript development workflows.

## 5. What is the difference between `dependencies` vs `devDependencies`?

### dependencies:

These are the packages that your project depends on in order to run in a production environment. They include libraries and modules that your application needs to function as intended when it's deployed. When you deploy your project, only the dependencies will be installed, not the devDependencies. Eg: react

### devDependencies:

These are packages that are only needed for development and testing purposes. They are not required for the actual production deployment of your application. Example: parcel

## 6. What is Tree shaking?

Tree shaking is a term commonly used in the JavaScript ecosystem, particularly in the context of module bundlers like Webpack or Parcel. It refers to the process of eliminating dead (unused) code from a bundle during the bundling or minification process.

## 7. What is Hot module replacement?

Hot Module Replacement (HMR) is a feature in modern web development that allows developers to update the code of a running application in real-time, without the need for a full page refresh. This means that you can see your changes instantly reflected in the browser as you make edits to your code.

## 8. What is .gitignore? what should we add and not add into it?

The .gitignore file is a configuration file used by the version control system Git. It specifies files and directories that should be ignored and not tracked by Git.
The purpose of the .gitignore file is to exclude files and directories that are not essential.

### What should we add:

- files that can be reproduced such as node_modules, .parcel-cache, etc. Also the dependencies

### What should we not add:

- Source Code or files that cannot be regenerated

## 9. What is the difference between `package.json` and `package-lock.json`?

`package.json` is a manually maintained file that describes the project and its dependencies in a more high-level manner, while `package-lock.json` is a machine-generated file that provides an exact, detailed record of the packages and their versions installed in the project, ensuring consistency across different environments. Both files work together to facilitate accurate and reproducible installations of dependencies.

## 10. Why should not I modify `package-lock.json`?

You should not modify package-lock.json directly because it's automatically generated and managed by npm or yarn to lock dependencies to specific versions. Modifying it manually can lead to inconsistencies or conflicts with your package dependencies, potentially causing unexpected behavior or issues in your project.

## 11. What is `node_modules`? is it a good idea to push that on git?

`node_modules` is a directory that contains all the dependencies (libraries and modules) required by a Node.js project. When you use a package manager like npm (Node Package Manager).

It's not a good idea. `node_modules` in version control is generally discouraged because it can lead to issues with repository size, performance, and reproducibility.

## 12. What is the `dist` folder?

The `dist` folder, short for "distribution," is a directory commonly used in software development projects to store the files that are ready for deployment or distribution to end-users.

## 13. Browserslist:

Browserslist is a tool and configuration file that allows you to specify which browsers your application should support. It is used in front-end development to define the range of browsers your project is expected to work in.

## 14. caret and tilda?

- ^(caret): upgrade minor versions like 2.8.3 to 2.8.4
- ~(tilda): upgrade majaor versions like 2.8.3 to 3.8.3