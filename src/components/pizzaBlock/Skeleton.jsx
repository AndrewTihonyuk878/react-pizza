import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="93" y="64" rx="0" ry="0" width="1" height="1" />
    <rect x="100" y="311" rx="0" ry="0" width="2" height="0" />
    <rect x="138" y="116" rx="0" ry="0" width="1" height="1" />
    <rect x="228" y="189" rx="0" ry="0" width="1" height="0" />
    <circle cx="110" cy="110" r="110" />
    <rect x="0" y="239" rx="10" ry="10" width="220" height="17" />
    <rect x="0" y="273" rx="10" ry="10" width="220" height="88" />
    <rect x="1" y="383" rx="10" ry="10" width="90" height="30" />
    <rect x="102" y="376" rx="18" ry="18" width="120" height="40" />
  </ContentLoader>
);

export default Skeleton;
