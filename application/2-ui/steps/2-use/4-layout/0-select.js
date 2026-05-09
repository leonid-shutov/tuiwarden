const sections = ui.steps.use;

(section) => {
  $.selected = section;
  sections[section].select();
};
