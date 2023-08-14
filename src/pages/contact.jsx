import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Get in touch with us!
						</div>

						<div className="subtitle contact-subtitle" style={{marginBottom:"25px"}}>
							Thank you for your interest in the ROADII program. Please reach out to the ITS JPO 
							data program leads for more information about how to get involved in ROADII. We are
							always looking for new participants!
						</div>

						<div className="subtitle contact-subtitle" style={{marginBottom:"25px"}}>
							Alternatively, you can fill out the form below to reach out directly to the ROADII team. 
							Fill out the form below to be added to our stakeholder list. We look forward to hearing from you!
						</div>

						<iframe width="100%" height="1385px" 
						src="https://forms.office.com/Pages/ResponsePage.aspx?id=WyTNxPBElUOhqjhI0lj3i4GjUE-JV3dGrsBPmH0NgflUNVRJRlBHTENKNlJMM05YQzY0QUdEWEFMVS4u&embed=true" 
						frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth:"100%", maxHeight:"1000vh"}}
						allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
