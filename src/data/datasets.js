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
					<div className="paragraph">Waze dataset</div>
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
		`The U.S. Department of Transportation ITS JPO's portal for open-access data.`,
		style: ``,
		keywords: [
			
		],
		body: (
			<React.Fragment>
				<h1>Data Hub Data</h1>
			</React.Fragment>
		),
	};
}

const myDatasets = [dataset_1, dataset_2, dataset_3];

export default myDatasets;
