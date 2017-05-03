// @flow

import type {Activity} from '../types/Activity';
import type {GamificationAction, UserScore} from '../types/Gamification';

export default async function createGamificationActivityList(actions: Array<GamificationAction>, userScores: Array<UserScore>) {
  let nestedPromise = processNestedActivities(actions, userScores);
  let singlePromise = procecssSingleActivities(actions, userScores);
  let [nestedActivities, singleActivities] = await Promise.all([nestedPromise, singlePromise]);
  return nestedActivities.concat(singleActivities);
}

export function processNestedActivities(actions: Array<GamificationAction>, userScores: Array<UserScore>): Promise<Array<Activity>> {
  return Promise.resolve(
    actions.filter((action) => action.detail)
      .reduce((nested: Array<Activity>, action) => {
        let isDone = userScores.filter((score) => score.page === action.page && score.detail === action.detail).length > 0;
        let parentIdx = nested.findIndex((parent) => parent.name === action.page);
        if (parentIdx !== -1) { // existing category, append activity to the sub activity list
          let subActivity = formatActionToActivity(action, isDone, 'sub');
          nested[parentIdx].subActivities.push(subActivity);
        } else { // new activity category
          nested.push(formatActionToActivity(action, isDone, 'main'));
        }
        return nested;
      }, [])
  );
}

export function procecssSingleActivities(actions: Array<GamificationAction>, userScores: Array<UserScore>): Promise<Array<Activity>> {
  return Promise.resolve(
    actions.filter((action) => !action.detail)
      .map((action) => {
        let isDone = userScores.filter((score) => score.page === action.page).length > 0;
        return formatActionToActivity(action, isDone, 'only');
      })
  );
}

export function formatActionToActivity(action: GamificationAction, isDone: boolean, option: 'main' | 'sub' | 'only'): $Shape<Activity> {
  let {id, detail, coin, page} = action;
  if (option === 'main') {
    return {
      id,
      type: page,
      name: page,
      coin,
      isDone,
      subActivities: [formatActionToActivity(action, isDone, 'sub')],
    };
  } else if (option === 'sub') {
    return {
      id,
      name: detail,
      coin,
      isDone,
    };
  } else {
    return {
      id,
      type: page,
      name: page,
      coin,
      isDone,
      subActivities: [],
    };
  }
}
