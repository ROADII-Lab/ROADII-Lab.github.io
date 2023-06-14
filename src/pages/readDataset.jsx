import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myDatasets from "../data/datasets";

import "./styles/readDataset.css";

let DatasetStyle = styled.div``;

const ReadDataset = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const dataset = myDatasets[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [dataset]);

	DatasetStyle = styled.div`
		${dataset().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${dataset().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={dataset().description} />
				<meta name="keywords" content={dataset().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-dataset-logo-container">
						<div className="read-dataset-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-dataset-container">
						<div className="read-dataset-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-dataset-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-dataset-wrapper">
							<div className="read-dataset-date-container">
								<div className="read-dataset-date">
									{dataset().date}
								</div>
							</div>

							<div className="title read-dataset-title">
								{dataset().title}
							</div>

							<div className="read-dataset-body">
								<DatasetStyle>{dataset().body}</DatasetStyle>
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

export default ReadDataset;
