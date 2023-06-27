import React from "react";

const AboutContent = () => {
    return (
        <React.Fragment>
        <div className="About-Top">
            <div className="First-About-Paragraph">
                The Research, Operational, and AI Data Integration
                Initiative (ROADII) is a multi-year initiative with a focus on
                research-to-operations activities. ROADII seeks to identify and prioritize
                research problems, identify potential solutions using advanced data analytics,
                and rapidly test the feasibility of solutions. It is envisioned to be an
                ongoing initiative that will identify and build a set of specific products to
                further the integration of transportation data and advanced analytics.
            </div>
            
            <div className="about-left-side">
                <div className="about-image-container">
                    <div className="about-image-wrapper">
                        <img
                            src="about.jpg"
                            alt="about"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="About-Paragraph">
            Ultimately, ROADII will help state and local transportation
            agencies utilize intelligent transportation system (ITS) data to its full
            potential by bridging the gap between public sector problems and private sector
            solutions. ROADII will develop processes that State and local departments of
            transportation (DOTs) and other users can adopt in-house to move from needs
            discovery to solution implementation. This aspect may include the development
            of guidance, best practices, lessons learned, and rubrics which can be used to
            evaluate products. ROADII will also partner directly with stakeholders to
            understand their needs related to ITS data and assist with technology and
            knowledge transfer, with the goal of building a community around data reuse and
            advanced analytics. ROADII’s work aligns with the USDOT RD&T Strategic Plan, especially the
            strategic area of Transformation and the research priority of Data-Driven
            Insights. Data-Driven Insights are intended to assist DOTs in making the
            transportation system safer and helping to grow an inclusive economy, reduce
            inequities, and promote environmentally sustainable and resilient
            transportation.
        </div>

        <div className="About-Paragraph">
            The goal of the ROADII program is to provide:
        </div>
        <div className="About-Paragraph">
            <li>A collection of guidance in the form of standard operating procedures (SOPs), best practices, evaluation templates, and development roadmaps</li>
            <li>Knowledge base of use cases with corresponding solutions and data containing developed software tools (source code) as well as caveats and limitations</li>
            <li>A space to prototype advanced analytics solutions that state DOTs may not have the resources to test in-house</li>
            <li>Training materials that educate stakeholders and pass on lessons learned from evaluation and solution development process</li>
            <li>Itemized and annotated list of stakeholder relationships</li>
        </div>
        <h2>ROADII Operational Structure</h2>
        <div className="About-Paragraph">
            ROADII is organized into three primary functions. The Intake and Evaluation team evaluates
            ITS problems (use cases) and determines whether they are well suited for ROADII. 
            The ROADII-Lab team focuses on development of example solutions, including documentation, 
            code, and datasets, for specific use cases. The Stakeholder team works with external organizations 
            to match use cases with an example solution already developed by the internal ROADII development team 
            (see below) or another platform and helps State and local agencies gain access to existing datasets 
            and solutions.
        </div>
        <div className="About-Paragraph">
            <b>Intake and Evaluation</b>: This group develops the overall process for intaking and evaluating 
            use cases to demonstrate advanced analytics. Key products from the Intake team include a 
            generic evaluation process that can be used/adapted by stakeholders and a list of priority use 
            cases to pass on to the ROADII-Lab or Stakeholder teams. The Intake and Evaluation 
            team assists with re-evaluation as the use cases mature within ROADII-Lab. 
        </div>
        <div className="About-Paragraph">
            <b>ROADII-Lab</b>: ROADII-Lab focuses on the development of solutions for use cases 
            that are evaluated and selected by the Intake and Evaluation team. ROADII-Lab is a 
            virtual organization of stakeholders that includes an internal ROADII development 
            team as well as external organizations who are engaged through a variety of partnership 
            types. ROADII will partner with stakeholders, who may be given access to compute 
            resources, to develop solutions to use cases of mutual value. The goal of 
            ROADII-Lab is to produce example solutions (including code and documentation) 
            to support knowledge transfer and education. Example solutions will be made available 
            here, in this Github organization. The resources developed by ROADII-Lab will enable 
            stakeholders to jumpstart their development process and avoid pitfalls that peer 
            organizations may have encountered in the past.
        </div>
        <div className="About-Paragraph">
            <b>Stakeholder Engagement and Training</b>: ROADII's stakeholder engagement activities 
            support the Intake and ROADII-Lab efforts by facilitating relationships with different types 
            of stakeholders. A primary goal of the team is to identify agencies that are 
            well equipped to develop a solution on their own, with potential support from 
            ROADII internal developers. Stakeholders may include State DOTs who use the data and wish 
            to apply advanced analytics techniques from TRIMS or another platform, as well as 
            Federal and State partners who can facilitate technology and knowledge transfer. To get in 
            touch with the ROADII team, see our <a href="/contact">contacts</a> page.
        </div>
        <h2>ROADII-Lab Internal Development</h2>
        <div className="About-Paragraph">
            Internally, ROADII Lab developers are currently working on example solutions to specific 
            use cases as prioritized by the Intake team. Advanced data analytics and AI model development
            require access to compute capabilities that are often best suited to working within a cloud 
            environment. Therefore, the ROADII team conducts the majority of their development activities in
            the USDOT's Secure Data Commons (SDC). This analysis and data storage platform gives DOT developers
            access to cloud resources they would otherwise not be able to use. It also provides access to 
            deployment and testing capabilities so ROADII and the solutions in TRIMS can help educate state 
            and local users on the most efficient technologies and associated configurations for 
            production-level systems. As the ROADII organization parterns with outside stakeholder groups, 
            
        </div>
        <div className="About-Paragraph">
            For more information about the Secure Data Commons, see the SDC homepage here: <a href="https://www.transportation.gov/data/secure">https://www.transportation.gov/data/secure</a>
        </div>
        </React.Fragment>
    );
};


export default AboutContent;