
module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log('nodejsexpress API - porta ${app.get("port")}');
    });
  });
}