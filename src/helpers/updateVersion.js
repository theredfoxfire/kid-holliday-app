// @flow
export default function updateVersion(version: string, versionLevel: string = 'patch') {
  let newVersionName = version;
  if (versionLevel === 'patch') {
    let versionName = version.split('.');
    let newPatchNumber = Number(versionName[2]) + 1;
    newVersionName = `${versionName[0]}.${versionName[1]}.${newPatchNumber}`;
  } else if (versionLevel === 'minor') {
    let versionName = version.split('.');
    let newMinorNumber = Number(versionName[1]) + 1;
    newVersionName = `${versionName[0]}.${newMinorNumber}.${versionName[2]}`;
  } else if (versionLevel === 'major') {
    let versionName = version.split('.');
    let newMajorNumber = Number(versionName[0]) + 1;
    newVersionName = `${newMajorNumber}.${versionName[1]}.${versionName[2]}`;
  }
  return newVersionName;
}
