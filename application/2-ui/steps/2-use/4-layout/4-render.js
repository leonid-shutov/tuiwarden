$.select($.selected);

const { wrapper, list, input } = ui.steps.use;

ui.screen.add(wrapper.component);

wrapper.component.add(list.component);
wrapper.component.add(input.component);
