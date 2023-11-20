import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '../styles/work-history.css';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import HomeSidebar from '../components/HomeSidebar';
import portfolio from '../content/portfolio.yaml';

const IndexPage: React.FC<PageProps> = (props) => {
  const { location } = props;
  return (
    <Layout pathname={location.pathname}>
      <div className="pt-9 flex flex-wrap">
        <HomeSidebar />
        <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12 sm:mt-20">
          <div className="flex pb-8">
            <div className="w-1/2 pr-4 lg:pr-12 border-r border-line">
              <h5 className="font-header font-semibold text-front text-sm uppercase pb-0">
                Company
              </h5>
              <h3 className="font-header font-light text-2xl text-front leading-tight">Djakne</h3>
              <div className="font-header font-semibold text-xs uppercase pt-2">
                <span className="inline-block w-2 h-2 rounded-full mr-1 bg-red-500"></span>{' '}
                Available for hire
              </div>
            </div>
            <div className="w-1/2 pl-4 lg:pl-12">
              <h5 className="font-header font-semibold text-front text-sm uppercase pb-0">
                Focused on
              </h5>
              <div className="font-header font-light text-2xl text-front leading-tight">
                {portfolio.focusOn}
                <div className="pt-1">
                  <a
                    href="https://github.com/"
                    className="inline-block text-front opacity-50 hover:opacity-75 h-5 w-5"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mr-0 lg:mr-10 pb-12 flex-1">
              <div>
                <h5 className="font-header font-semibold text-front text-sm uppercase pb-3">
                  Top skills
                </h5>
                <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
                  {portfolio.topSkills.map((skill: any, index: number) => (
                    <Skill title={skill.name} i={index + 1} />
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <h5 className="font-header font-semibold text-front text-sm uppercase pb-3">
                  Services
                </h5>
                <div className="font-text text-sm">
                  <ul>
                    {portfolio.services.map((service: any) => (
                      <li className="inline-block">
                        <a
                          href={service.url}
                          target="_blank"
                          className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-md rounded-lg border border-lead-text hover:bg-lead hover:border-lead"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 pb-12">
              <h5 className="font-header font-semibold text-front text-sm uppercase pb-3">
                Frameworks
              </h5>
              <ul className="lex-col mt-2 lg:block md:flex md:flex-wrap">
                {portfolio.frameworks.map((framework: any) => (
                  <li className="block md:block mb-1 mr-1 md:mr-2">
                    <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text hover:bg-transparent border-2 border-lead hover:border-black">
                      {framework.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*
          <h5 className="font-header font-semibold text-front text-sm uppercase pb-3">About</h5>
          <div className="font-text text-sm pb-6">
            <p className="pb-6">
              Bring to the table win-win survival strategies to ensure proactive domination. At the
              end of the day, going forward, a&nbsp;new normal that has evolved from generation X is
              on the runway heading towards a streamlined cloud solution.
              <br />
              <br /> User generated content in real-time will have multiple touchpoints for
              offshoring. Keeping your eye on the ball while performing a deep dive on the start-up
              mentality to derive convergence on cross-platform integration.
            </p>
          </div>
          <h5 className="font-header font-semibold text-front text-sm uppercase pb-3">Projects</h5>
          <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6 bg-project">
            <h4>JS GraphQL library</h4>
            <a href="https://github.com" target="_blank" className="text-front hover:opacity-75">
              https://github.com
            </a>
            <p className="w-full">
              Override the digital divide with additional clickthroughs from DevOps. User generated
              content in real-time will have multiple touchpoints for offshoring.
            </p>
            <ul className="pr-2">
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                <span className="dot status-default"></span> Status: in progress
              </li>
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                JavaScript
              </li>
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                GraphQL
              </li>
            </ul>
            <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </span>
          </div>
          <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6 bg-project">
            <h4>Running Lists</h4>
            <a
              href="https://running-lists.com"
              target="_blank"
              className="text-front hover:opacity-75"
            >
              https://running-lists.com
            </a>
            <p className="w-full">
              Nanotechnology immersion along the information highway will close the loop on focusing
              solely on the bottom line.
            </p>
            <ul className="pr-2">
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                <span className="dot status-green"></span> Status: live
              </li>
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                RoR
              </li>
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                HTML
              </li>
              <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                CSS
              </li>
            </ul>
            <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path>
              </svg>
            </span>
          </div>
          <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6 bg-project">
            <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
              <img src="images/podcast.jpg" alt="Northwest Podcast" className="w-full" />
            </div>
            <div className="lg:w-3/5">
              <h4>Northwest Podcast</h4>
              <a
                href="https://npodcast.com"
                target="_blank"
                className="text-front hover:opacity-75"
              >
                https://npodcast.com
              </a>
              <p className="w-full">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
              </p>
              <ul className="pr-2">
                <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                  <span className="dot status-green"></span> Status: live
                </li>
                <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                  JavaScript
                </li>
                <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
                  HTML
                </li>
              </ul>
            </div>
            <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path>
              </svg>
            </span>
          </div>
            */}
          <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 pb-3 text-center">
            Work history
          </h5>
          <div className="history flex flex-col relative pt-6 pb-6">
            {portfolio.workHistory.map((occupation: any) => (
              <div className="history-entry relative w-1/2 py-4">
                <span className="dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center">
                  <span className="dot w-5 h-5 bg-back-light rounded-full" />
                </span>
                <h4>{occupation.name}</h4>
                <h5 className="text-sm font-normal mb-1">{occupation.role}</h5>
                <span className="text-sm font-medium opacity-50">{occupation.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
    />
  </>
);
