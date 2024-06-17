import React from 'react'
import { FC } from 'react';

const PortfolioInitial: FC = () => {
    return (
        <div className="text-[1.6rem] min-h-screen flex flex-col items-center justify-center">
            <header className="w-full text-center p-6">
                <h1 className="text-[4rem] font-bold">Ayush Chittranshi</h1>
                <p className="text-[2.5rem] mt-2">Front-End Developer</p>
            </header>
            <main className="flex flex-col items-center space-y-8">
                <section className="text-center">
                    <h2 className="text-[2rem] font-semibold">About Me</h2>
                    <p className="mt-4 max-w-[60rem]">
                        Front-End developer with a unique background in enhancing client
                        communication and teamwork. A firm believer in efficiency, I enjoy
                        optimizing processes and personal productivity. A skilled problem solver, I
                        focus on finding effective solutions to complex challenges.
                    </p>
                </section>
                <section className="text-center">
                    <h2 className="text-[2.3rem] font-semibold">Experience</h2>
                    <div className="mt-4 grid grid-cols-1  gap-8">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-[2rem] font-medium">
                                PeerXP Services Pvt Ltd
                            </h3>
                            <p className="mt-2">Joined as a solo front-end developer and branched out contributing to backend. Delivered timely results for 6 projects, including both client and internal projects.
                                Gathered and managed client requirements for both design and implementation.
                                Worked with diverse technologies including Next.js, REST API’s Rollup bundler, Redux, React, GitLab, CI/CD pipelines, and Node.js.
                                Built a capable team of 4 developers from scratch and led the team to achieve project objectives.
                                Experienced in creating mobile responsive, SEO compatible, optimized UI focused on best KPI scores like Cumulative Layout Shift(CLS) and Largest Contentful Paint(LCP). </p>
                        </div>
                    </div>
                </section>
                <section className="text-center">
                    <h2 className="text-[2.3rem] font-semibold">Projects</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-[2rem] font-medium">
                                Interior Management - Inventory and Reporting App
                            </h3>
                            <p className="mt-2">Developed an interior management application using Node.js and React, enabling efficient tracking and reporting for over 20 client sites.
                                Focused on creating highly customized, optimized, and performant UI with care to ensure minimum rerenders using effective state management, DOM manipulation, and event handling.
                                Designed and implemented an Inventory Management module, decreasing inventory delay incidents by 50% and reducing inventory wastage by 10%.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-[2rem] font-medium">
                                React Component Library (RCL)
                            </h3>
                            <p className="mt-2">
                                Ideated and developed a React Component Library (RCL),
                                streamlining UI design employing Rollup bundler and React Js.
                                Reduced development time for the frontend team by 30% through the
                                implementation.
                                Established RCL as a central repository for customizable UI elements
                                and hooks, integrating Storybook for easier testing and design.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full text-center p-4 mt-8">
                <p>&copy; {new Date().getFullYear()} Ayush Chittranshi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PortfolioInitial;

