// @flow

const {describe, it} = global;

import formatToCamelCase from '../formatToCamelCase';
import expect from 'expect';

describe('formatToCamelCase test', () => {
  it('should format simple object without changes', () => {
    let plainObject = {
      id: '123',
      name: 'john',
    };
    expect(formatToCamelCase(plainObject)).toEqual(plainObject);
  });
  it('should format snake case object to camelCase object', () => {
    let snakeCaseObject = {
      user_id: '123',
      user_name: 'michael',
      user_password: 'somethingsecret',
    };
    expect(formatToCamelCase(snakeCaseObject)).toEqual({
      userID: '123',
      userName: 'michael',
      userPassword: 'somethingsecret',
    });
  });
  it('should format deeply nested SnakeCase Object to CamelCase Object', () => {
    let deeplyNested = {
      user_id: '123',
      user_name: 'michael',
      user_task: {
        task_id: '123',
        task_name: 'do homework',
        task_category: {
          category_id: '124',
          category_list: ['urgent', 123],
        },
      },
    };
    expect(formatToCamelCase(deeplyNested)).toEqual({
      userID: '123',
      userName: 'michael',
      userTask: {
        taskID: '123',
        taskName: 'do homework',
        taskCategory: {
          categoryID: '124',
          categoryList: ['urgent', 123],
        },
      },
    });
  });
});
