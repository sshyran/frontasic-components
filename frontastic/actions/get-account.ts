import useSWR from 'swr';
import { fetchApiHub, ResponseError } from '../lib/fetch-api-hub';
import { Account } from '../../../types/account/Account';

interface LoggedInResult {
  loggedIn: true;
  account: Account;
}

interface NotLoggedInResult {
  loggedIn: false;
}

interface ErrorResult {
  loggedIn: false;
  error: ResponseError;
}

export type GetAccountResult = LoggedInResult | NotLoggedInResult | ErrorResult;

export const getAccount = (): GetAccountResult => {
  const result = useSWR<LoggedInResult | NotLoggedInResult, ResponseError>('/action/account/getAccount', fetchApiHub);

  if (result.data) {
    return result.data;
  }

  return {
    loggedIn: false,
    error: result.error,
  };
};
