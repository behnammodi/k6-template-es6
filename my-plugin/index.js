module.exports = function myPlugin(babel) {
  const { types: t } = babel;

  console.log("BEHNAM myPlugin");

  return {
    visitor: {
      JSXElement(path) {
        const openingElement = path.node.openingElement;
        const componentName = openingElement.name;

        // Transform JSX attributes to a JS object
        const attributes = openingElement.attributes.map((attr) => {
          return t.objectProperty(
            t.identifier(attr.name.name),
            attr.value.type === "JSXExpressionContainer"
              ? attr.value.expression
              : attr.value
          );
        });

        // Create an ObjectExpression from the attributes
        const propsObject = t.objectExpression(attributes);

        // Create a CallExpression (MyComponent({...props}))
        const callExpression = t.callExpression(
          t.identifier(componentName.name), // Function name (e.g. MyComponent)
          [propsObject] // Arguments (e.g. { prop: "value" })
        );

        // Replace the JSX element with the function call
        path.replaceWith(callExpression);
      },
    },
  };
};

