const sections = ui.steps.use.sections;
sections.input.on('data', (text) => sections.list.search(text));
