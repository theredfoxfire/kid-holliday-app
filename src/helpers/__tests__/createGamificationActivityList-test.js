// @flow

import expect from 'expect';
import createGamificationActivityList, {
  processNestedActivities,
  procecssSingleActivities,
  formatActionToActivity,
} from '../createGamificationActivityList';

const {describe, it} = global;

const actions = [
  {id: 1, page: 'foo', detail: 'bar', coin: 100, status: '', description: '', slug: ''},
  {id: 2, page: 'foo', detail: 'baz', coin: 150, status: '', description: '', slug: ''},
  {id: 3, page: 'foobar', detail: '', coin: 500, status: '', description: '', slug: ''},
];

const userScores = [
  {id: 123, user: 'Mr. Foo', page: 'foo', detail: 'baz', oneTime: 0, fourTimes: 0, daily: 1},
];

const subActivities = [
  {id: 1, name: 'bar', coin: 100, isDone: false},
  {id: 2, name: 'baz', coin: 150, isDone: true},
];

describe('createGamificationActivityList', () => {
  it('should return the correct array of activities', async () => {
    let expected = [
      {id: 1, type: 'foo', name: 'foo', isDone: false, coin: 100, subActivities},
      {id: 3, type: 'foobar', name: 'foobar', isDone: false, coin: 500, subActivities: []},
    ];
    let actual = await createGamificationActivityList(actions, userScores);
    expect(actual).toEqual(expected);
  });
});

describe('processNestedActivities', () => {
  it('should process and return nested array of activities', async () => {
    let expected = [
      {id: 1, type: 'foo', name: 'foo', isDone: false, coin: 100, subActivities},
    ];
    let actual = await processNestedActivities(actions, userScores);
    expect(actual).toEqual(expected);
  });
});

describe('procecssSingleActivities', () => {
  it('should process and return flat array of activities', async () => {
    let expected = [
      {id: 3, type: 'foobar', name: 'foobar', isDone: false, coin: 500, subActivities: []},
    ];
    let actual = await procecssSingleActivities(actions, userScores);
    expect(actual).toEqual(expected);
  });
});

describe('formatActionToActivity', () => {
  it('should return objects correctly based on option sent', () => {
    let expectedSub = {id: 1, name: 'bar', coin: 100, isDone: false};
    let expectedMain = {id: 1, type: 'foo', name: 'foo', isDone: false, coin: 100, subActivities: [expectedSub]};
    let expectedOnly = {id: 1, type: 'foo', name: 'foo', isDone: false, coin: 100, subActivities: []};
    let actualSub = formatActionToActivity(actions[0], false, 'sub');
    let actualMain = formatActionToActivity(actions[0], false, 'main');
    let actualOnly = formatActionToActivity(actions[0], false, 'only');
    expect(actualSub).toEqual(expectedSub);
    expect(actualMain).toEqual(expectedMain);
    expect(actualOnly).toEqual(expectedOnly);
  });
});
