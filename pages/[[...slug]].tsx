import React from 'react';
import { GetServerSideProps, Redirect } from 'next';
import { createClient } from 'frontastic';
import { tastics } from 'frontastic/tastics';
import { FrontasticRenderer } from 'frontastic/lib/renderer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './slug.module.css';

type SlugProps = {
  data: any;
};

export default function Slug({ data }: SlugProps) {
  if (!data) {
    return null;
  }
  return <FrontasticRenderer data={data} tastics={tastics} wrapperClassName={styles.gridWrapper} />;
}

export const getServerSideProps: GetServerSideProps | Redirect = async ({ params, locale, query }) => {
  const frontastic = createClient(process.env.NEXT_PUBLIC_FRONTASTIC_HOST, process.env.NEXT_PUBLIC_FRONTASTIC_API_KEY);
  const data = await frontastic.getRouteData(params, locale, query);

  if ('target' in data) {
    return {
      redirect: {
        destination: data.target,
        statusCode: data.statusCode,
      } as Redirect,
    };
  }

  return {
    props: {
      data: data || null,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
