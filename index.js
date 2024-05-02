document.querySelectorAll('[data-toggle="accordion"]').forEach((trigger) => {
  const config = {
    trigger,
  };
  const accordion = new core.Accordion(config);
  accordion.setBehavior();
});
