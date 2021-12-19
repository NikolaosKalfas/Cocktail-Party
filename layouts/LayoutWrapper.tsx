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

const LayoutWrapper = ({children}) => {
  // Creating the property 'layout' of type where we will assign on each page its value (secondary, tertiary, etc)
  const layout:string = children.type.layout
  const Layout = layouts[layout];

  if (Layout !== (null || undefined)) {
    return <Layout>{children}</Layout>;
  }

  return <PrimaryLayout>{children}</PrimaryLayout>;
};

export default LayoutWrapper;
