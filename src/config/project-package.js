/* eslint-disable global-require, import/no-dynamic-require */
const path = require('path');

function getProjectPackagePath() {
  return path.resolve('./package.json');
}

function getProjectPackage() {
  return require(getProjectPackagePath());
}

function hasDependency(packageName, pkg = getProjectPackage()) {
  return Boolean(
    (pkg.dependencies && pkg.dependencies[packageName]) ||
      (pkg.peerDependencies && pkg.peerDependencies[packageName])
  );
}

function hasReactNativeDependency(pkg) {
  return hasDependency('react-native', pkg);
}

function hasVueDependency(pkg) {
  return hasDependency('vue', pkg);
}

function isReactNativeProject() {
  return hasDependency('react-native');
}

function isVueProject() {
  return hasDependency('vue');
}

module.exports = {
  getProjectPackagePath,
  getProjectPackage,
  hasReactNativeDependency,
  hasVueDependency,
  isReactNativeProject,
  isVueProject,
};
