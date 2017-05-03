import expect from 'expect';

import formatObjectKeys from '../formatObjectKeys';

const {describe, it} = global;

describe('formatObjectKeys test', () => {
  it('Should format object keys correctly', () => {
    let temp = {
      desc: 'asd',
      type_land: '1',
      bah: 'string',
      bih: 123,
    };
    let options = {
      prefixAddition: {
        targets: ['desc', 'type_land'],
        prefix: 'phase',
      },
      textReplacement: [{
        targetKey: 'type_land',
        replaceWith: 'landType',
      }, {
        targetKey: 'bih',
        replaceWith: 'bih_changed_to_something',
      }],
      isAddPrefix: true,
      isReplaceLiteral: true,
    };
    let result = formatObjectKeys(temp, options);
    expect(result['phaseDesc']).toEqual(temp.desc);
    expect(result['bih_changed_to_something']).toEqual(temp.bih);
    expect(result['bah']).toEqual(temp.bah);
    expect(result['phaseLandType']).toEqual(temp.type_land);
  });
});
