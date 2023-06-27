import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Dataset from "../components/homepage/dataset";
// import Works from "../components/homepage/works";
import AllProjects from "../components/usecases/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myDatasets from "../data/datasets";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="homepage-image-container">
					<div className="homepage-image-wrapper">
						<img
							src="DataScienceStockPhoto.jpg"
							alt="about"
							className="homepage-image"
						/>
					</div>
				</div>
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<div className="homepage-logo-container">
										<div style={logoStyle}>
											<Logo width={logoSize} link={false} />
										</div>
									</div>
									{INFO.homepage.title}
								</div>

								<div className="homepage-welcome-text">
									{INFO.homepage.description}
								</div>
								<div className="homepage-welcome-text">
									{INFO.homepage.description2}
								</div>
							</div>
							
						</div>
						<div className="homepage-after-title">
							<div className="homepage-projects">
								<div className="homepage-subtitle">Highlighted Use Cases</div>
								<AllProjects />
							</div>

							<div className="homepage-datasets">
								<div className="homepage-subtitle">Datasets</div>
								{myDatasets.slice(0, 2).map((dataset, index) => (
									<div
										className="homepage-dataset"
										key={(index + 1).toString()}
									>
										<Dataset
											key={(index + 1).toString()}
											title={dataset().title}
											description={dataset().description}
											link={"/dataset/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>


					</div>
					<div className="homepage-socials">
						
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faMailBulk}
								className="homepage-social-icon"
							/>
						</a>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
