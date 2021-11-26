import PrimaryLayout from "./PrimaryLayout";
import SecondaryLayout from "./SecondaryLayout";

interface Layouts {
  primary: object;
  secondary: object;
};

const layouts: Layouts = {
  primary: PrimaryLayout,
  secondary: SecondaryLayout
};

const LayoutWrapper = (props) => {
  const Layout = layouts[props.children.type.layout];

  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }

  return <PrimaryLayout {...props}>{props.children}</PrimaryLayout>;
};

export default LayoutWrapper;
