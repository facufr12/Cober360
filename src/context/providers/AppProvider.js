// import node module libraries
import React, { useReducer } from 'react';

// import app config file
import { settings } from 'AppConfig';

// import context file
import { AppConfigContext } from 'context/Context';

// import reducer file
import { AppConfigReducer } from 'reducers/AppConfigReducer';

const AppProvider = ({ children }) => {
	const initialState = {
		name: settings.app.name,
		version: settings.app.version,
		skin: settings.theme.skin,
		selectedSkinMode: settings.theme.skin,
		logo: settings.theme.logo,
		mentorLogo: settings.theme.mentorLogo,
		inverseLogo: settings.theme.inverseLogo,
		inverseLogoIcon: settings.theme.inverseLogoIcon,
	};
	const [appStats, appStatsDispatch] = useReducer(
		AppConfigReducer,
		initialState
	);
	const setAppConfig = (newStat) => {
		appStatsDispatch({
			type: 'CHANGE_SKIN',
			payload: {
				skin: newStat
			}
		});
	};
	const setSkinModeConfig = (newStat) => {
		appStatsDispatch({
			type: 'CHANGE_SKIN_MODE',
			payload: {
				selectedSkinMode: newStat
			}
		});
	};

	return (
		<AppConfigContext.Provider value={{ appStats, appStatsDispatch, setAppConfig, setSkinModeConfig }} >
			{children}
		</AppConfigContext.Provider>
	);
};

export default AppProvider;
