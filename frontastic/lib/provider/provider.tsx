import * as React from 'react';
import { SWRConfig } from 'swr';
import { fetchApiHub } from '../fetch-api-hub';
import { FrontasticState, getFrontasticState } from './FrontasticState';


const initialState: FrontasticState = {
  useCart: {} as any,
  useAccount: {} as any,
  useWishlist: {} as any
};

const FrontasticContext = React.createContext<FrontasticState>(initialState);

export const FrontasticProvider: React.FC = ({ children }) => {
  const state: FrontasticState = getFrontasticState();
  return (
    <SWRConfig value={{ fetcher: fetchApiHub }}>
      <FrontasticContext.Provider value={state}>{children}</FrontasticContext.Provider>
    </SWRConfig>
  );
};

const checkContext = (context: FrontasticState) => {
  if (!context) {
    throw new Error('Expected to be wrapped in FrontasticProvider');
  }
}

export const useCart = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useCart;
};

export const useAccount = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useAccount;
};

export const useWishlist = () => {
  const context = React.useContext(FrontasticContext);
  checkContext(context);
  return context.useWishlist;
};
