module.exports = {
  injectChanges: false,
  files: ["./**/*.{html,htm,css,js}"],
  watchOptions: { ignored: "node_modules" },
  server: true,

  // Looks kind of ugly in the url but keeps the files organized.
  // Tried using the index option but it messes up the relative paths.
  startPath: "public/index.html",
};
