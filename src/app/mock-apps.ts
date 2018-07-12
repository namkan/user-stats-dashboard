import {App} from './app';

export const APPS: App[] = [
  { id: 'cov', name: 'Chat Over Video',
   activityData: {
  	datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0'
			},
			{
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#565656'
    	}
    ],
    labels: ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July']
	},
	behaviorData: {
		labels: ['Returning Users', 'New Users'],
		datasets: [
			{
				data: [80, 20],
				backgroundColor: [
					"#FF6384",
          "#36A2EB"
					],
				hoverBackgroundColor: [
					"#FF6384",
          "#36A2EB"
				]
			}]
		}
	},
	{ id: 'sc', name: 'Social Camera',
   activityData: {
  	datasets: [
			{
				label: 'First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0'
			},
			{
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#565656'
    	}
    ],
    labels: ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July']
	},
	behaviorData: {
		labels: ['Returning Users', 'New Users'],
		datasets: [
			{
				data: [80, 20],
				backgroundColor: [
					"#FF6384",
          "#36A2EB"
					],
				hoverBackgroundColor: [
					"#FF6384",
          "#36A2EB"
				]
			}]
		}
	},
   { id: 'app', name: 'My Galaxy stories',
    },
  // { id: 'tr', name: 'Transliteration' },
  // { id: 'mgs', name: 'My Galaxy Stories' },
  // { id: 'mgw', name: 'My Galaxy widgets' }
];