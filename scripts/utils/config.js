const docsConfig = {
    temp: "githubRepo", // Name of temporary folder, will be deleted after build
    repository: "secureCodeBox/secureCodeBox#main", // The repository url without the github part of the link
    targetPath: "docs", // This needs to be 'docs' for the docusaurus build, but you may specify a 'docs/<subdirectory>'
    srcDirs: ["scanners", "hooks"], // Directory names, relative to the root directory of the github project, containing the subdirectories with documentation
    sizeLimit: 500000, // Limit of file size, most importantly used for large findings.
    findingsDir: "public/findings", // Directory for large findings which exceeded sizeLimit
  },
  integrationsConfig = {
    targetFile: "src/integrations.js", // Name of the target file to (over-)write
    integrationDirs: ["hooks", "scanners"], // Names of the directories relative to the root level of the `/docs` folder
    defaultIcon: "img/integrationIcons/Default.svg", // Default Icon when no imageUrl provided or could not resolve imageUrl
  },
  sidebarConfig = {
    sidebarName: "sidebars.json",
    // Sidebar gets merged with the entries autogenerated from the docs config listed above.
    // Entries in "sidebarStart" will be placed **before** the auto generated items
    // Entries in "sidebarEnd" will be placed **after** the auto generated items
    sidebarStart: {
      "Getting Started": [
        "getting-started/installation",
        "getting-started/first-scans",
        "getting-started/uninstallation",
      ],
      "How To's": [
        "how-tos",
        "how-tos/automatically-repeating-scans",
        "how-tos/scanning-networks",
        "how-tos/scanning-web-applications",
      ],
    },
    sidebarEnd: {
      "API Reference": [
        {
          type: "category",
          label: "Custom Resource Definitions",
          items: [
            "api/crds",
            "api/crds/scan",
            "api/crds/scheduled-scan",
            "api/crds/scan-type",
            "api/crds/parse-definition",
            "api/crds/scan-completion-hook",
            "api/crds/cascading-rule",
          ],
        },
        "api/finding",
      ],
      Contributing: [
        "contributing/integrating-a-scanner",
        "contributing/integrating-a-hook",
        "contributing/operator",
        "contributing/conventions",
      ],
    },
  };

module.exports = {
  docsConfig,
  integrationsConfig,
  sidebarConfig,
};
