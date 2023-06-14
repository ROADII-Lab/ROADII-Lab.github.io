import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Dataset from "../components/datasets/dataset";

import INFO from "../data/user";
import SEO from "../data/seo";
import myDatasets from "../data/datasets";

import "./styles/datasets.css";

const Datasets = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "datasets");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Datasets | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="datasets" />
				<div className="content-wrapper">
					<div className="datasets-logo-container">
						<div className="datasets-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="datasets-main-container">
						<div className="title datasets-title">
							{INFO.datasets.title}
						</div>

						<div className="subtitle datasets-subtitle">
							{INFO.datasets.description}
						</div>

						<div className="datasets-container">
							<div className="datasets-wrapper">
								{myDatasets.map((dataset, index) => (
									<div
										className="datasets-dataset"
										key={(index + 1).toString()}
									>
										<Dataset
											key={(index + 1).toString()}
											date={dataset().date}
											title={dataset().title}
											description={dataset().description}
											link={"/dataset/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Datasets;
