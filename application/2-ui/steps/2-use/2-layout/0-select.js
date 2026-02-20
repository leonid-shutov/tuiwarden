const sections = ui.steps.use.sections;

(section) => {
  sections[$.selected].deselect();
  $.selected = section;
  sections[section].select();
};
