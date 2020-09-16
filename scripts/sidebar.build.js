const fs = require('fs');
const rimraf = require('rimraf');
const colors = require('colors');

colors.setTheme({
  info: 'blue',
  help: 'cyan',
  warn: 'yellow',
  success: 'green',
  error: 'red',
});

/**
 ** This script iterates through the entire 'docs/' folder and work as follows:
 ** 1. Put all root documents into the category 'rootCategory'.
 ** 2. Translate each directory into a category, listing files as page links and subdirectories as subcategories.
 ** 3. Repeat step 2 if subdirectories exist.
 ** 4. (Over-)Write 'sidebars.js'
 */

const sidebarName = 'sidebars.js';
const sidebar = { someSidebar: {} };
const rootCategory = 'Introduction';

if (fs.existsSync(sidebarName)) {
  rimraf.sync(sidebarName);

  console.warn(
    `WARN: ${sidebarName.info} already existed and was removed.`.warn
  );
}

const categories = fs
  .readdirSync(`docs`, { encoding: 'utf8', withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const fileNames = fs
  .readdirSync(`docs`, { encoding: 'utf8', withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name.split('.').slice(0, -1).join('.'));

if (fileNames.length > 0) {
  sidebar.someSidebar[rootCategory] = fileNames;
  console.log(
    `SUCCESS: Added root document files to ${sidebarName.info}.`.success
  );
}

if (categories.length > 0) {
  for (const category of categories) {
    const cat = capitalizeFirst(category);
    sidebar.someSidebar[cat] = createObjectFromDir(`docs/${category}`, cat)[
      cat
    ];
    console.log(
      `SUCCESS: Added ${category.help} to ${sidebarName.info}.`.success
    );
  }

  fs.writeFile(
    sidebarName,
    `module.exports = ${JSON.stringify(sidebar)};`,
    function (err) {
      err
        ? console.error(`ERROR: Could not create ${sidebarName.info}.`)
        : console.warn(
            `SUCCESS: Created ${sidebarName.info} successfully.`.success
          );
    }
  );
} else {
  console.warn(`WARN: Nothing found in ${'docs/'.info}.`.warn);

  fs.writeFile(
    sidebarName,
    `module.exports = ${JSON.stringify(sidebar)};`,
    function (err) {
      err
        ? console.error(`ERROR: Could not create empty ${sidebarName.info}.`)
        : console.warn(`WARN: Empty ${sidebarName.info} created`.warn);
    }
  );
}

function createObjectFromDir(dir, categoryName) {
  const category = capitalizeFirst(categoryName);
  // remove 'docs/' for correct reference
  const relDir = dir.replace('docs/', '', 1);

  const obj = { [category]: [] };

  const fileNames = fs
    .readdirSync(dir, {
      encoding: 'utf8',
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name.split('.').slice(0, -1).join('.'));

  const fileLinks = [];
  for (const fileName of fileNames) {
    fileLinks.push(`${relDir}/${fileName}`);
  }

  const subDirs = fs
    .readdirSync(dir, { encoding: 'utf8', withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Iterates through all subdirectories recursively
  if (subDirs.length > 0) {
    for (const subDir of subDirs) {
      const items = createObjectFromDir(`${dir}/${subDir}`, subDir)[
        capitalizeFirst(subDir)
      ];
      obj[category].push({
        type: 'category',
        label: subDir,
        items: items,
      });
    }
  }

  obj[category] = obj[category].concat(fileLinks);

  return obj;
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}