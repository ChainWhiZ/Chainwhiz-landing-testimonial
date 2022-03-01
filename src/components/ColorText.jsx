import { createElement } from "react";
function ColorText({ context, tag, wordIndexes, classname }) {
  const _className = classname ? classname : "text-yellow";
  const _indexes = wordIndexes ? wordIndexes : [];
  const words = context.split(" ");

  const elements=words.map((element, ind) => {
      return _indexes.includes(ind)?createElement(tag,{className:_className},element+'\u00A0'):createElement(tag,null,element+'\u00A0')
  });

  console.log(elements);
  return createElement("span",null,elements)
}

export default ColorText;
