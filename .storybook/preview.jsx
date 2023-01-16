import { DocsContainer } from "@storybook/blocks";

const ExampleContainer = ({ children, ...props }) => {
  console.log(props.context.storyById());
  return <DocsContainer {...props}>{children}</DocsContainer>;
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    container: ExampleContainer,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
