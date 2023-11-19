import * as React from 'react';
type Props = {
  children?: React.ReactNode;
  pathname: string;
};

const Layout: React.FC = (props: Props) => {
  const { children, pathname } = props;


  const isBlog = pathname.includes('blog')
  console.log('LALA', pathname, isBlog)

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <section className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 pt-4">
        <div className=" bg-back flex items-center justify-center pt-5 pb-4 sticky top-0 z-30">
          <a href="/" className={`${isBlog ? 'font-header' : ''} font-semibold text-front text-md uppercase mr-5`}>
            Portfolio
          </a>
          <a href="/blog" className={`${isBlog ? '' : 'font-header'} font-semibold text-front text-md uppercase mr-5`}>
            Blog
          </a>
        </div>

        <div>{children}</div>
      </section>
      <footer className="bg-front mt-16 pt-8 pb-16">
        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
          <div className="w-2/3 text-white font-header text-xs">
            <b>&copy; {new Date().getFullYear()}.</b> All rights reserved.
          </div>
          <div className="w-1/3 text-right"></div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
