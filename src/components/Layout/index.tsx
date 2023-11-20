import * as React from 'react';
type Props = {
  children?: React.ReactNode;
  pathname: string;
};

const Layout: React.FC = (props: Props) => {
  const { children, pathname } = props;

  const isBlog = pathname.includes('blog');
  console.log('LALA', pathname, isBlog);

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <section className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 pt-4">
        <div className="relative bg-back flex items-center justify-center pt-5 pb-4 sticky top-0 z-30">
          <div className="absolute top-5 left-0 lg:left-24 flex items-center  group">
            <div className="relative">
              <div className="rounded-full w-5 h-5 bg-white shadow-md" />
              <div className="absolute z-9 rounded-full w-5 h-5 bg-lead inset-0 rounded-full transform translate-x-2 duration-300 lg:group-hover:translate-x-24 shadow-md" />
            </div>
            <a href="/" className='ml-6 font-header font-bold text-front text-md invisible lg:visible'>Lybo</a>
          </div>
          <div>
            <a
              href="/"
              className={`${
                isBlog ? 'font-header' : ''
              } font-semibold text-front text-md uppercase mr-5`}
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className={`${
                isBlog ? '' : 'font-header'
              } font-semibold text-front text-md uppercase mr-5`}
            >
              Blog
            </a>
          </div>
        </div>

        <div>{children}</div>
      </section>
      <footer className="bg-front mt-16 pt-8 pb-16">
        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
          <div className="w-2/3 text-white font-header text-xs">
            <b>&copy; 2023.</b> All rights reserved.
          </div>
          <div className="w-1/3 text-right"></div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
