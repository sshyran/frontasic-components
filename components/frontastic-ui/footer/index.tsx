import React from 'react';
import LanguageSwitcher from 'components/frontastic-ui/language-switcher';
import Typography from 'components/frontastic-ui/typography';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import { renderIcon } from './renderIcon';

interface Link {
  name: string;
  reference: Reference;
}

interface Column {
  icon?: string;
  header: string;
  links: Link[];
}
interface CopyrightLink {
  name: string;
  reference: Reference;
}
export interface FooterProps {
  columns: Column[];
  copyright?: string;
  copyrightLinks?: CopyrightLink[];
}

const Footer: React.FC<FooterProps> = ({ columns, copyright }) => {
  const { formatMessage } = useFormat({ name: 'common' });

  const footerCopyrightLinks = [
    { name: formatMessage({ id: 'cookies', defaultMessage: 'Cookies' }), reference: '/' },
    {
      name: formatMessage({ id: 'privacy.policy', defaultMessage: 'Privacy policy' }),
      reference: '/',
    },
    {
      name: formatMessage({ id: 'terms.conditions', defaultMessage: 'T&C' }),
      reference: '/',
    },
  ];

  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto w-full bg-gray-100 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-10 px-2 xl:grid xl:grid-cols-2 xl:gap-8">
          <div
            className={`grid grid-cols-1 gap-10 md:gap-4 md:grid-cols-${(columns.length + 1).toString()} xl:col-span-2`}
          >
            {columns.map((column, index) => (
              <div key={index} className="md:flex md:justify-center">
                <div>
                  <div className="flex space-x-2">
                    {renderIcon(column.icon)}
                    <h3 className="text-sm font-medium text-gray-800">
                      <Typography>{column.header}</Typography>
                    </h3>
                  </div>
                  <ul role="list" className="mt-6 space-y-3">
                    {column.links.map((item, i) => (
                      <li key={i} className="text-sm">
                        <ReferenceLink target={item.reference} className="px-6 text-gray-700 hover:text-gray-800">
                          <Typography>{item.name}</Typography>
                        </ReferenceLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="justify-left md:justify-center">
              <div className="md:justify-left flex space-x-2">
                {renderIcon('speaker')}
                <h3 className="text-sm font-medium text-gray-800">
                  <Typography>Language</Typography>
                </h3>
              </div>
              <LanguageSwitcher className="p-4 md:px-8" />
            </div>
          </div>
        </div>
      </div>
      {copyright && (
        <div className="flex place-content-between border-t border-gray-200 bg-primary-400 p-4 sm:px-10">
          <p className="text-xs text-white sm:text-sm">© {copyright}</p>
          <ul className="flex">
            {footerCopyrightLinks.map((item, i) => (
              <li key={i} className="text-xs">
                <p className="px-2 text-gray-300 hover:text-white sm:text-sm">
                  <Typography>{item.name}</Typography>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
