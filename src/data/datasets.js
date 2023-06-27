import React from "react";

function dataset_1() {
	return {
		date: "7 May 2023",
		title: "National Waze Repository",
		description:
			`The Connected Citizens Program is an ongoing partnership 
			 between Waze and various international government agencies 
			 to share publicly-available incident and road closure data. 
			 The Waze Connected Citizens Program (CCP) is a free, two-way 
			 data exchange empowering municipal decisions to achieve 
			 concrete community impact.
			 Waze provides real-time, anonymous, proprietary incident 
			 and slow-down information directly from the source: drivers themselves.`,
		keywords: [
			"TRIMS",
			"Waze",
			"Alerts",
			"Jams",
		],
		style: `
				.dataset-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="dataset-content">
					<div className="paragraph">
						The Waze roadway incident and jams data are provided by the Waze for Cities Program (previously known as the Connected Citizens Program). These data are provided free by Waze to public agencies around the world, partly in exchange for participation in provisioning roadway closure data, and partly as a public service by Waze. Waze provides real-time, anonymous, proprietary incident and slow-down information directly from drivers, aggregate these data, and provides them to public agencies. Public agency partners provide real-time and advance information on construction, crash, and road closure data. 
						</div>
						<div className="paragraph">
							<p></p>
						The data are provided nationally across the US to the USDOT through a Memorandum of Understanding with the USDOT Chief Data Officer. The data have been stored in the USDOT Secure Data Commons (SDC) since spring 2017.
						The stream of data from the Waze API is in JSON format, with an API call every 2 minutes. The structure of these data and fields are described in the Waze Traffic Data Specification Document, Version 2.7.1. 
						</div>
						<div className="paragraph">
							<p></p>
						In SDC, these data are housed in a Redshift relational database. There are three main tables that are used in data analysis: alerts, jams, and jam point sequences. </div>
						</div>
						<div className="paragraph">
							<p></p>
							Read more about the Waze archive here: <a href="https://www.transportation.gov/content/safety-data-initiative">https://www.transportation.gov/content/safety-data-initiative</a>
						</div>
			</React.Fragment>
		),
	};
}

function dataset_2() {
	return {
		date: "Time -2 days",
		title: "National Performance Management Research Dataset (NPMRDS)",
		description:
		`Transportation agencies are increasingly using probe vehicle data for transportation system
		performance management and as a resource for meeting the federal requirements of monitoring
		and reporting congestion and freight performance enacted in the Moving Ahead for Progress
		in the 21st Century Act (MAP-21). Federal regulations require setting objectives and targets
		to guide transportation funding allocation based on safety and operational performance measures.
		
		To assist agencies with meeting the MAP-21 regulations, the Federal Highway Administration (FHWA)
		provides free access to the National Performance Management Research Data Set (NPRMDS),
		a national database of probe-vehicle-based speed and travel time data. The NPMRDS offers a new
		opportunity to monitor and report work zone performance measures. Using the NPMRDS, agencies can
		better benchmark the baseline mobility conditions prior to work zone activity, quantify and analyze
		work zone mobility impacts both during construction and post-construction, and implement mobility
		 objectives and targets to proactively manage work zone mobility impacts.`,
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h1>NPMRDS Speed Data</h1>
			</React.Fragment>
		),
	};
}

function dataset_3() {
	return {
		date: "2017-2023",
		title: "ITS JPO DataHub",
		description:
		`ITS DataHub is a centralized platform for finding open and reusable ITS research projects and data management tools. 
		It provides real-time access to research datasets and associated documentation, reducing the time required for insights. 
		Users can contribute by hosting new data, creating data stories and visualizations, downloading data, or suggesting improvements. 
		ITS DataHub supports third-party research, application development, and harmonization across similar collections. 
		It offers a wide range of datasets created with ITS technologies, including connected vehicle messages, automated vehicle data, 
		trajectories, field test data, sensor data, connected equipment data, weather data, and application messages.`,
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h2>Read more about the ITS Datahub and associated datasets at <a href="https://www.its.dot.gov/data/"> https://www.its.dot.gov/data/</a></h2>
			</React.Fragment>
		),
	};
}

function dataset_4() {
	return {
		date: "2007-2018",
		title: "SHRP2 Dataset",
		description:
		`
		The second Strategic Highway Research Program (SHRP2) has conducted over 100 research projects to tackle key issues like aging infrastructure, 
		congestion, and safety. These projects have resulted in effective solutions that will enhance the planning, operation, maintenance, and safety of American roadways.
		
		Authorized by SAFETEA-LU, SHRP2 builds upon the achievements of the first SHRP, which introduced innovations like Superpave for durable roads 
		and technologies for snow and ice management. MAP-21 has provided additional funding for implementation activities.`,
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h1>SHRP2 Data</h1>
			</React.Fragment>
		),
	};
}

const myDatasets = [dataset_1, dataset_2, dataset_3, dataset_4];

export default myDatasets;
