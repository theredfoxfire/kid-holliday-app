let {describe, it} = global;

import expect from 'expect';
import updateVersion from '../updateVersion';

describe('Update Version', () => {
  let version = '2.1.1';
  it('should bump the patch version', () => {
    let newVersion = updateVersion(version, 'patch');
    expect(newVersion).toBe('2.1.2');
  });
  it('should bump the minor version', () => {
    let newVersion = updateVersion(version, 'minor');
    expect(newVersion).toBe('2.2.1');
  });
  it('should bump the major version', () => {
    let newVersion = updateVersion(version, 'major');
    expect(newVersion).toBe('3.1.1');
  });
  it(`should return back the version number when it doesn't match minor nor patch nor major`, () => {
    let newVersion = updateVersion(version, 'anything else');
    expect(newVersion).toBe('2.1.1');
  });
  it(`should bump the patch version as default`, () => {
    let newVersion = updateVersion(version);
    expect(newVersion).toBe('2.1.2');
  });
});
