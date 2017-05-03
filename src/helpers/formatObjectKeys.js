// @flow

type TextReplace = {|
  targetKey: string;
  replaceWith: string;
|};
type PrefixAddition = {
  targets: Array<string>;
  prefix: string;
};
type Option = {|
  prefixAddition?: PrefixAddition;
  textReplacement?: Array<TextReplace>;
  isAddPrefix: boolean;
  isReplaceLiteral: boolean;
|};

export default function formatObjectKeys(data: Object, options: Option) {
  let {prefixAddition, textReplacement, isAddPrefix, isReplaceLiteral} = options;
  let keys = Object.keys(data);
  let result = {};

  for (let key of keys) {
    let replacedKey = null;
    if (isReplaceLiteral && (textReplacement != null && textReplacement.length !== 0)) {
      for (let replacement of textReplacement) {
        if (key === replacement.targetKey) {
          replacedKey = replacement.replaceWith;
        }
      }
    }
    let newKey = replacedKey == null ? null : replacedKey;
    if (isAddPrefix && prefixAddition != null) {
      let {targets, prefix} = prefixAddition;
      let flag = false;
      targets.forEach((target) => {
        if (key === target) {
          newKey ?
            result[prefix + newKey[0].toUpperCase() + newKey.slice(1)] = data[key] :
            result[prefix + target[0].toUpperCase() + target.slice(1)] = data[key];
          flag = true;
          return;
        }
      });
      if (flag) {
        continue;
      } else {
        newKey ? result[newKey] = data[key] : result[key] = data[key];
      }
    }
    newKey ? result[newKey] = data[key] : result[key] = data[key];
  }
  return result === {} ? null : result;
}
