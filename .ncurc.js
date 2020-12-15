/**
 * This is the config file for npm-check-updates
 * @see https://github.com/raineorshine/npm-check-updates#configuration-files
 */
module.exports = {
  upgrade: true,
  // Following packages CANNOT BE UPGRADED
  // because of broken semver, dependency issue or obsolescence
  reject: [],
}
