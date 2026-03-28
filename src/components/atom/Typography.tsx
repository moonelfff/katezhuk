type Props = {
  children: React.ReactNode;
  component?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

function Typography({ children, component = "p", className = "" }: Props) {
  const Component = component;

  let classes: string;

  switch (component) {
    case "h1":
      classes = `text-4xl font-semibold text-dusty-grape mb-2 ${className}`;
      break;
    case "h2":
      classes = `text-3xl font-semibold mb-6 ${className}`;
      break;
    case "h3":
      classes = `text-2xl font-semibold mb-2 ${className}`;
      break;
    case "h4":
      classes = `text-xl ${className}`;
      break;
    case "h5":
      classes = `text-lg ${className}`;
      break;
    case "h6":
      classes = `text-base ${className}`;
      break;
    case "p":
      classes = `text-justify text-base ${className}`;
      break;
    case "span":
      classes = `${className}`;
      break;
    case "div":
      classes = `${className}`;
      break;
    default:
      classes = `${className}`;
  }

  return <Component className={classes}>{children}</Component>;
}

export default Typography;
