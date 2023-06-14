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
        </React.Fragment>
    );
};


export default AboutContent;