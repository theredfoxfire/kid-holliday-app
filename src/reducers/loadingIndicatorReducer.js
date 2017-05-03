// @flow

import type {Action} from '../types/Action';
import type {Loaders} from '../types/Loaders';

export default function loadingIndicatorReducer(state: Loaders, action: Action) {
  if (state == null) {
    return {
      isPlantDetailLoading: true,
      isLoginLoading: false,
      isMarketPriceLoading: false,
      isThreadLoading: true,
      isThreadDetailLoading: true,
      isUpdatePaswordLoading: false,
      isUpdatePaswordSuccess: false,
      isForgotPaswordLoading: false,
      isForgotPaswordSuccess: false,
      isProductDetailLoading: true,
      isSubmitThreadLoading: false,
      isFetchingMoreProductData: false,
      isReportForumLoading: false,
      isUserGroupLoading: false,
      isOtherGroupLoading: false,
      isInvitedGroupLoading: false,
      isFetchingMoreStoreProduct: false,
      isJoinGroupLoading: false,
      isNearestStoreLoading: false,
      isFetchingGroupMembersLoading: false,
      isFetchingGroupThreadsLoading: false,
      isFetchingMorePlants: true,
      isFetchingGroupDetail: true,
      isNotificationLoading: true,
      isPlantingGuidesLoading: true,
      isPlantingGuideDetailLoading: true,
      isGamificationBonusLoading: true,
      isRewardListLoading: true,
    };
  } else {
    switch (action.type) {
      case 'FETCH_PLANTS_REQUESTED': {
        return {
          ...state,
          isFetchingMorePlants: true,
        };
      }
      case 'FETCH_REWARDS_SUCCESS': {
        return {
          ...state,
          isRewardListLoading: false,
        };
      }
      case 'FETCH_PLANTS_SUCCESS':
      case 'FETCH_PLANTS_FAILED': {
        return {
          ...state,
          isFetchingMorePlants: false,
        };
      }
      case 'FETCH_STORE_BY_PRODUCT_REQUESTED': {
        return {
          ...state,
          isNearestStoreLoading: true,
        };
      }
      case 'FETCH_STORE_BY_PRODUCT_SUCCESS':
      case 'FETCH_STORE_BY_PRODUCT_FAILED': {
        return {
          ...state,
          isNearestStoreLoading: false,
        };
      }
      case 'FETCH_STORE_PRODUCTS_REQUESTED': {
        return {
          ...state,
          isFetchingMoreStoreProduct: true,
        };
      }
      case 'FETCH_STORE_PRODUCTS_FAILED':
      case 'FETCH_STORE_PRODUCTS_SUCCESS': {
        return {
          ...state,
          isFetchingMoreStoreProduct: false,
        };
      }
      case 'FETCH_PRODUCT_LIST_REQUESTED': {
        return {
          ...state,
          isFetchingMoreProductData: true,
        };
      }
      case 'FETCH_PRODUCT_LIST_FAILED':
      case 'FETCH_PRODUCT_LIST_SUCCESS': {
        return {
          ...state,
          isFetchingMoreProductData: false,
        };
      }
      case 'FETCH_PRODUCT_DETAIL_SUCCESS': {
        return {
          ...state,
          isProductDetailLoading: false,
        };
      }
      case 'FETCH_PRODUCT_DETAIL_REQUESTED': {
        return {
          ...state,
          isProductDetailLoading: true,
        };
      }
      case 'FETCH_PLANT_DETAIL_REQUESTED': {
        return {
          ...state,
          isPlantDetailLoading: true,
        };
      }
      case 'FETCH_PLANT_DETAIL_FAILED':
      case 'FETCH_PLANT_DETAIL_SUCCESS': {
        return {
          ...state,
          isPlantDetailLoading: false,
        };
      }
      case 'FACEBOOK_LOGIN':
      case 'LOGIN': {
        return {
          ...state,
          isLoginLoading: true,
        };
      }
      case 'UPDATE_PASSWORD': {
        return {
          ...state,
          isUpdatePaswordSuccess: false,
        };
      }
      case 'UPDATE_PASSWORD_POST': {
        return {
          ...state,
          isUpdatePaswordLoading: true,
        };
      }
      case 'FORGOT_PASSWORD_POST': {
        return {
          ...state,
          isForgotPaswordLoading: true,
        };
      }
      case 'FACEBOOK_LOGIN_ERROR':
      case 'FACEBOOK_LOGIN_CANCEL':
      case 'LOGOUT_SUCCESS':
      case 'LOGIN_FAILED':
      case 'LOGIN_SUCCESS': {
        return {
          ...state,
          isLoginLoading: false,
        };
      }
      case 'UPDATE_PASSWORD_POST_SUCCESS': {
        return {
          ...state,
          isUpdatePaswordLoading: false,
          isUpdatePaswordSuccess: true,
        };
      }
      case 'FORGOT_PASSWORD': {
        return {
          ...state,
          isForgotPaswordSuccess: false,
        };
      }
      case 'FORGOT_PASSWORD_POST_SUCCESS': {
        return {
          ...state,
          isForgotPaswordLoading: false,
          isForgotPaswordSuccess: true,
        };
      }
      case 'REGISTER_USER': {
        return {
          ...state,
          isRegisterUserLoading: true,
        };
      }
      case 'REGISTER_USER_FAILED':
      case 'REGISTER_USER_ERROR':
      case 'REGISTER_USER_SUCCESS': {
        return {
          ...state,
          isRegisterUserLoading: false,
        };
      }
      case 'PUSH_ROUTE': {
        if (action.key === 'marketPrice') {
          return {
            ...state,
            isMarketPriceLoading: true,
          };
        }
        return state;
      }
      case 'FETCH_MARKET_PRICE_INITIAL_SUCCESS': {
        return {
          ...state,
          isMarketPriceLoading: false,
        };
      }
      case 'FETCH_PROVINCE_PRICE_REQUESTED': {
        return {
          ...state,
          isProvincePriceLoading: true,
        };
      }
      case 'FETCH_PROVINCE_PRICE_SUCCESS': {
        return {
          ...state,
          isProvincePriceLoading: false,
        };
      }
      case 'FETCH_COMMODITY_PRICE_REQUESTED': {
        return {
          ...state,
          isCommodityPriceLoading: true,
        };
      }
      case 'FETCH_COMMODITY_PRICE_SUCCESS': {
        return {
          ...state,
          isCommodityPriceLoading: false,
        };
      }
      case 'FETCH_MORE_PEST_REQUESTED': {
        return {
          ...state,
          isFetchingMorePestData: true,
        };
      }
      case 'FETCH_MORE_DISEASE_REQUESTED': {
        return {
          ...state,
          isFetchingMoreDiseaseData: true,
        };
      }
      case 'FETCH_MORE_PEST_SUCCESS': {
        return {
          ...state,
          isFetchingMorePestData: false,
        };
      }
      case 'FETCH_MORE_DISEASE_SUCCESS': {
        return {
          ...state,
          isFetchingMoreDiseaseData: false,
        };
      }
      case 'FETCH_PEST_DISEASE_REQUESTED': {
        return {
          ...state,
          isPestDiseaseLoading: true,
        };
      }
      case 'FETCH_PEST_DISEASE_SUCCESS': {
        return {
          ...state,
          isPestDiseaseLoading: false,
        };
      }
      case 'FETCH_FILTERED_DISEASE_REQUESTED': {
        return {
          ...state,
          isFetchingMoreDiseaseData: true,
        };
      }
      case 'FETCH_FILTERED_DISEASE_SUCCESS': {
        return {
          ...state,
          isFetchingMoreDiseaseData: false,
        };
      }
      case 'FETCH_FILTERED_DISEASE_FAILED': {
        return {
          ...state,
          isFetchingMoreDiseaseData: false,
        };
      }
      case 'FETCH_FILTERED_PEST_REQUESTED': {
        return {
          ...state,
          isFetchingMorePestData: true,
        };
      }
      case 'FETCH_FILTERED_PEST_FAILED': {
        return {
          ...state,
          isFetchingMorePestData: false,
        };
      }
      case 'FETCH_FILTERED_PEST_SUCCESS': {
        return {
          ...state,
          isFetchingMorePestData: false,
        };
      }
      case 'FETCH_OTHER_THREADS_REQUESTED':
      case 'FETCH_USER_THREADS_REQUESTED': {
        return {
          ...state,
          isThreadLoading: true,
        };
      }
      case 'FETCH_OTHER_THREADS_SUCCESS':
      case 'FETCH_OTHER_THREADS_FAILED':
      case 'FETCH_USER_THREADS_SUCCESS':
      case 'FETCH_USER_THREADS_FAILED': {
        return {
          ...state,
          isThreadLoading: false,
        };
      }
      case 'LIKE_THREAD_REQUESTED': {
        return {
          ...state,
          isLikeThreadLoading: true,
        };
      }
      case 'LIKE_THREAD_SUCCESS':
      case 'LIKE_THREAD_FAILED': {
        return {
          ...state,
          isLikeThreadLoading: false,
        };
      }
      case 'FETCH_PEST_DETAIL_REQUESTED': {
        return {
          ...state,
          isPestDiseaseDetailLoading: true,
        };
      }
      case 'FETCH_PEST_DETAIL_SUCCESS': {
        return {
          ...state,
          isPestDiseaseDetailLoading: false,
        };
      }
      case 'FETCH_DISEASE_DETAIL_REQUESTED': {
        return {
          ...state,
          isPestDiseaseDetailLoading: true,
        };
      }
      case 'FETCH_DISEASE_DETAIL_SUCCESS': {
        return {
          ...state,
          isPestDiseaseDetailLoading: false,
        };
      }
      case 'FETCH_SEARCHED_PEST_REQUESTED': {
        return {
          ...state,
          isFetchingMorePestData: true,
        };
      }
      case 'FETCH_SEARCHED_PEST_SUCCESS': {
        return {
          ...state,
          isFetchingMorePestData: false,
        };
      }
      case 'FETCH_SEARCHED_PEST_FAILED': {
        return {
          ...state,
          isFetchingMorePestData: false,
        };
      }
      case 'FETCH_SEARCHED_DISEASE_REQUESTED': {
        return {
          ...state,
          isFetchingMoreDiseaseData: true,
        };
      }
      case 'FETCH_SEARCHED_DISEASE_SUCCESS': {
        return {
          ...state,
          isFetchingMoreDiseaseData: false,
        };
      }
      case 'FETCH_SEARCHED_DISEASE_FAILED': {
        return {
          ...state,
          isFetchingMoreDiseaseData: false,
        };
      }
      case 'FETCH_THREAD_DETAIL_REQUESTED': {
        return {
          ...state,
          isThreadDetailLoading: true,
        };
      }
      case 'FETCH_THREAD_DETAIL_SUCCESS':
      case 'FETCH_THREAD_DETAIL_FAILED': {
        return {
          ...state,
          isThreadDetailLoading: false,
        };
      }
      case 'FETCH_COMMENTS_REQUESTED': {
        return {
          ...state,
          isThreadCommentsLoading: true,
        };
      }
      case 'FETCH_COMMENTS_SUCCESS':
      case 'FETCH_COMMENTS_FAILED': {
        return {
          ...state,
          isThreadCommentsLoading: false,
        };
      }
      case 'LIKE_COMMENT_REQUESTED': {
        return {
          ...state,
          isLikeCommentLoading: true,
        };
      }
      case 'LIKE_COMMENT_SUCCESS':
      case 'LIKE_COMMENT_FAILED': {
        return {
          ...state,
          isLikeCommentLoading: false,
        };
      }
      case 'POST_COMMENT_REQUESTED': {
        return {
          ...state,
          isPostCommentLoading: true,
        };
      }
      case 'POST_COMMENT_SUCCESS':
      case 'POST_COMMENT_FAILED': {
        return {
          ...state,
          isPostCommentLoading: false,
        };
      }
      case 'FETCH_PRODUCT_REVIEW_REQUESTED': {
        return {
          ...state,
          isLoadMoreReviewLoading: true,
        };
      }
      case 'FETCH_PRODUCT_REVIEW_SUCCESS': {
        return {
          ...state,
          isLoadMoreReviewLoading: false,
        };
      }
      case 'POST_REVIEW_REQUESTED': {
        return {
          ...state,
          isLoadMoreReviewLoading: true,
        };
      }
      case 'POST_REVIEW_SUCCESS': {
        return {
          ...state,
          isLoadMoreReviewLoading: false,
        };
      }
      case 'POST_REVIEW_FAILED': {
        return {
          ...state,
          isLoadMoreReviewLoading: false,
          isProductDetailLoading: false,
        };
      }
      case 'FETCH_PRODUCT_REVIEW_FAILED': {
        return {
          ...state,
          isLoadMoreReviewLoading: false,
        };
      }
      case 'SHARE_PLANT_TO_FORUM_REQUESTED':
      case 'EDIT_THREAD_REQUESTED':
      case 'CREATE_THREAD_REQUESTED': {
        return {
          ...state,
          isSubmitThreadLoading: true,
        };
      }
      case 'SHARE_PLANT_TO_FORUM_SUCCEED':
      case 'SHARE_PLANT_TO_FORUM_FAILED':
      case 'EDIT_THREAD_SUCCESS':
      case 'EDIT_THREAD_FAILED':
      case 'CREATE_THREAD_SUCCESS':
      case 'CREATE_THREAD_FAILED': {
        return {
          ...state,
          isSubmitThreadLoading: false,
        };
      }
      case 'FETCH_FILTERED_THREADS_REQUESTED':
      case 'FETCH_SEARCHED_THREADS_REQUESTED': {
        return {
          ...state,
          isThreadLoading: true,
        };
      }
      case 'FETCH_FILTERED_THREADS_SUCCESS':
      case 'FETCH_FILTERED_THREADS_FAILED':
      case 'FETCH_SEARCHED_THREADS_SUCCESS':
      case 'FETCH_SEARCHED_THREADS_FAILED': {
        return {
          ...state,
          isThreadLoading: false,
        };
      }
      default: {
        return state;
      }
      case 'REPORT_FORUM_ITEM_REQUESTED': {
        return {
          ...state,
          isReportForumLoading: true,
        };
      }
      case 'REPORT_FORUM_ITEM_SUCCESS':
      case 'REPORT_FORUM_ITEM_FAILED': {
        return {
          ...state,
          isReportForumLoading: false,
        };
      }
      case 'FETCH_USER_GROUP_LIST_REQUESTED': {
        return {
          ...state,
          isUserGroupLoading: true,
        };
      }
      case 'FETCH_GROUP_LIST_REQUESTED': {
        return {
          ...state,
          isOtherGroupLoading: true,
        };
      }
      case 'FETCH_GROUP_INVITATION_LIST_REQUESTED': {
        return {
          ...state,
          isInvitedGroupLoading: true,
        };
      }
      case 'FETCH_USER_GROUP_LIST_SUCCESS':
      case 'FETCH_USER_GROUP_LIST_FAILED': {
        return {
          ...state,
          isUserGroupLoading: false,
        };
      }
      case 'FETCH_GROUP_LIST_SUCCESS':
      case 'FETCH_GROUP_LIST_FAILED': {
        return {
          ...state,
          isOtherGroupLoading: false,
        };
      }
      case 'FETCH_GROUP_INVITATION_LIST_SUCCESS':
      case 'FETCH_GROUP_INVITATION_LIST_FAILED': {
        return {
          ...state,
          isInvitedGroupLoading: false,
        };
      }
      case 'FETCH_SEARCHED_GROUPS_REQUESTED': {
        let {groupCategory} = action;
        return {
          ...state,
          isUserGroupLoading: groupCategory === 'joined',
          isOtherGroupLoading: groupCategory === 'not-joined',
          isInvitedGroupLoading: groupCategory === 'invite',
        };
      }
      case 'FETCH_SEARCHED_GROUPS_SUCCESS':
      case 'FETCH_SEARCHED_GROUPS_FAILED': {
        return {
          ...state,
          isUserGroupLoading: false,
          isOtherGroupLoading: false,
          isInvitedGroupLoading: false,
        };
      }
      case 'CONFIRM_GROUP_INVITATION_REQUESTED':
      case 'JOIN_GROUP_REQUESTED': {
        return {
          ...state,
          isProcessGroupLoading: true,
        };
      }
      case 'CONFIRM_GROUP_INVITATION_SUCCESS':
      case 'CONFIRM_GROUP_INVITATION_FAILED':
      case 'JOIN_GROUP_SUCCESS':
      case 'JOIN_GROUP_FAILED': {
        return {
          ...state,
          isProcessGroupLoading: false,
        };
      }
      case 'FETCH_GROUP_DETAIL_REQUESTED': {
        return {
          ...state,
          isFetchingGroupDetail: true,
        };
      }
      case 'FETCH_GROUP_DETAIL_SUCCESS':
      case 'FETCH_GROUP_DETAIL_FAILED': {
        return {
          ...state,
          isFetchingGroupDetail: false,
        };
      }
      case 'FETCH_GROUP_MEMBERS_REQUESTED': {
        return {
          ...state,
          isFetchingGroupMembersLoading: true,
        };
      }
      case 'FETCH_GROUP_MEMBERS_SUCCESS':
      case 'FETCH_GROUP_MEMBERS_FAILED': {
        return {
          ...state,
          isFetchingGroupMembersLoading: false,
        };
      }
      case 'FETCH_GROUP_THREADS_REQUESTED': {
        return {
          ...state,
          isFetchingGroupThreadsLoading: true,
        };
      }
      case 'FETCH_GROUP_THREADS_SUCCESS':
      case 'FETCH_GROUP_THREADS_FAILED': {
        return {
          ...state,
          isFetchingGroupThreadsLoading: false,
        };
      }
      case 'DELETE_THREAD_REQUESTED': {
        return {
          ...state,
          isThreadDetailLoading: true,
        };
      }
      case 'DELETE_THREAD_SUCCESS':
      case 'DELETE_THREAD_FAILED': {
        return {
          ...state,
          isThreadDetailLoading: false,
        };
      }
      case 'FETCH_NOTIFICATION_REQUESTED': {
        return {
          ...state,
          isNotificationLoading: true,
        };
      }
      case 'FETCH_NOTIFICATION_SUCCEED':
      case 'FETCH_NOTIFICATION_FAILED': {
        return {
          ...state,
          isNotificationLoading: false,
        };
      }
      case 'FETCH_CONTACT_DATA_REQUESTED': {
        return {
          ...state,
          isFetchContactLoading: true,
        };
      }
      case 'FETCH_CONTACT_DATA_SUCCEED':
      case 'FETCH_CONTACT_DATA_FAILED': {
        return {
          ...state,
          isFetchContactLoading: false,
        };
      }
      case 'SUGGESTION_SUBMISSION_REQUESTED': {
        return {
          ...state,
          isSubmitEmailLoading: true,
        };
      }
      case 'SUGGESTION_SUBMISSION_SUCCEED':
      case 'SUGGESTION_SUBMISSION_FAILED': {
        return {
          ...state,
          isSubmitEmailLoading: false,
        };
      }
      case 'FETCH_PLANTING_GUIDES_REQUESTED': {
        return {
          ...state,
          isPlantingGuidesLoading: true,
        };
      }
      case 'FETCH_PLANTING_GUIDES_SUCCEED':
      case 'FETCH_PLANTING_GUIDES_FAILED': {
        return {
          ...state,
          isPlantingGuidesLoading: false,
        };
      }
      case 'FETCH_PLANTING_GUIDE_DETAIL_REQUESTED': {
        return {
          ...state,
          isPlantingGuideDetailLoading: true,
        };
      }
      case 'FETCH_PLANTING_GUIDE_DETAIL_SUCCEED':
      case 'FETCH_PLANTING_GUIDE_DETAIL_FAILED': {
        return {
          ...state,
          isPlantingGuideDetailLoading: false,
        };
      }
      case 'FETCH_LEVELS_SUCCESS':
      case 'FETCH_LEVELS_FAILED': {
        return {
          ...state,
          isGamificationBonusLoading: false,
        };
      }
      case 'FETCH_LEVELS_REQUESTED': {
        return {
          ...state,
          isGamificationBonusLoading: true,
        };
      }
      case 'FETCH_REWARDS_REQUESTED': {
        return {
          ...state,
          isRewardListLoading: true,
        };
      }
      case 'FETCH_GAMIFICATION_ACTIONS_REQUESTED': {
        return {
          ...state,
          isFetchingGamificationActions: true,
        };
      }
      case 'FETCH_GAMIFICATION_ACTIONS_SUCCEED':
      case 'FETCH_GAMIFICATION_ACTIONS_FAILED': {
        return {
          ...state,
          isFetchingGamificationActions: false,
        };
      }
      case 'FETCH_USER_GAMIFICATION_ACTIONS_REQUESTED': {
        return {
          ...state,
          isFetchingUserGamificationActions: true,
        };
      }
      case 'FETCH_USER_GAMIFICATION_ACTIONS_SUCCEED':
      case 'FETCH_USER_GAMIFICATION_ACTIONS_FAILED': {
        return {
          ...state,
          isFetchingUserGamificationActions: false,
        };
      }
      case 'FETCH_USER_SCORES_REQUESTED': {
        return {
          ...state,
          isFetchingUserScores: true,
        };
      }
      case 'FETCH_USER_SCORES_SUCEED':
      case 'FETCH_USER_SCORES_FAILED': {
        return {
          ...state,
          isFetchingUserScores: false,
        };
      }
    }
  }
}
