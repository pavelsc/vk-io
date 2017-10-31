import VKError from './vk';
import APIError from './api';
import AuthError from './auth';
import CollectError from './collect';
import UpdatesError from './updates';
import ExecuteError from './execute';
import StreamingRuleError from './streaming-rule';

export { apiErrors, authErrors, updatesErrors } from '../util/constants';

export {
	VKError,
	APIError,
	AuthError,
	CollectError,
	UpdatesError,
	ExecuteError,
	StreamingRuleError
};

export default VKError;