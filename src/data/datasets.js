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
		date: "One Month Previous",
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
				<p>Transportation agencies are increasingly using probe vehicle data for transportation system
		performance management and as a resource for meeting the federal requirements of monitoring
		and reporting congestion and freight performance enacted in the Moving Ahead for Progress
		in the 21st Century Act (MAP-21). Federal regulations require setting objectives and targets
		to guide transportation funding allocation based on safety and operational performance measures. 
		</p>
		<p>
		To assist agencies with meeting the MAP-21 regulations, the Federal Highway Administration (FHWA)
		provides free access to the National Performance Management Research Data Set (NPRMDS),
		a national database of probe-vehicle-based speed and travel time data. The NPMRDS offers a new
		opportunity to monitor and report work zone performance measures. Using the NPMRDS, agencies can
		better benchmark the baseline mobility conditions prior to work zone activity, quantify and analyze
		work zone mobility impacts both during construction and post-construction, and implement mobility
		 objectives and targets to proactively manage work zone mobility impacts. 
		 </p>
		 <p>
			NPMRDS data provides high time and spatial resolution data that may be useful in uderstanding 
			roadway vulnerability to traffic incidents as well as roadway geometry impact on system performance overall.
			There have been relatively few efforts to apply ML or AI techniques to the NPMRDS dataset in the past, 
			so the ROADII development process will be a good opportunity to explore these potential applications.
		 </p>
		 <p>To read more about the NPMRDS datasets, see the home page here: <a href="https://ops.fhwa.dot.gov/publications/fhwahop20028/index.htm">https://ops.fhwa.dot.gov/publications/fhwahop20028/index.htm</a></p>
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
				<p>ITS DataHub provides access and discoverability for a number of datasets specific to ITS research projects and data management tools.
					Datasets consist of connected vehicle messages, field test data, weather data, and roadway sensor data. These datasets may be useful in
					understanding the efficacy of ITS systems, characterizing performance and benefits, and supporting standards development or adoption.
				</p>
				<p>Read more about the ITS Datahub and associated datasets at <a href="https://www.its.dot.gov/data/"> https://www.its.dot.gov/data/</a></p>
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
				<p>SHRP2 Data provides crash, near-crash, and baseline datasets extracted from the Second Strategic 
					Highway Research Program</p>
				<p>For more information, see FHWA's informational page on the SHRP2 Dataset development effort: <a href="https://www.fhwa.dot.gov/goshrp2/Solutions/All/NDS/Concept_to_Countermeasure__Research_to_Deployment_Using_the_SHRP2_Safety_Data">https://www.fhwa.dot.gov/goshrp2/Solutions/All/NDS/SHRP2</a></p>
			</React.Fragment>
		),
	};
}

const myDatasets = [dataset_1, dataset_2, dataset_3, dataset_4];

export default myDatasets;
