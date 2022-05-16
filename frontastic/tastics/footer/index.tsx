import React from 'react';
import Footer from 'components/frontastic-ui/footer';
import Highlights from './highlights';

const FooterTastic = ({ data }) => {
  const columns = [
    {
      header: data.headerCol1,
      links: data.linksCol1,
    },
    {
      header: data.headerCol2,
      links: data.linksCol2,
    },
    {
      header: data.headerCol3,
      links: data.linksCol3,
    },
  ];

  return (
    <div className="fixed-screen-width lg:relative-width">
      <Highlights />
      <Footer columns={columns} copyright={data.copyright} />
    </div>
  );
};

export default FooterTastic;
