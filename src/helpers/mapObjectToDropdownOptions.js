// @flow

import type {Option as DropdownOption} from '../core-ui/Dropdown';

type Options = {
  value: string; // name of the property that will be used as the value of the dropdown option
  label: string; // name of the property that will be used as the label of the dropdown option
};

export default function mapObjectToDropdownOptions(mapObject: Map<any, any>, options: Options): Array<DropdownOption> {
  let dropdownOptions = [];
  for (let obj of mapObject.values()) {
    if (!obj.hasOwnProperty(options.value) || !obj.hasOwnProperty(options.label)) {
      throw new Error('Property(ies) defined in options is not found in the given object.');
    }
    dropdownOptions.push({value: obj[options.value], label: obj[options.label]});
  }
  return dropdownOptions;
}
