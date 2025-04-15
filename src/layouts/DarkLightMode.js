/* eslint-disable */
// import node module libraries
import { Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { useContext, useEffect, useState } from 'react';
import { CircleHalf, MoonStarsFill, SunFill } from 'react-bootstrap-icons'

// import context file
import { AppConfigContext } from 'context/Context';

// import required hook
import useLocalStorage from 'hooks/useLocalStorage';

const DarkLightMode = ({ className }) => {
	const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const ConfigContext = useContext(AppConfigContext);
	const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
	const { storageValue, setStorageValue, getStorageValue } = useLocalStorage(
		'skin',
		ConfigContext.appStats.skin,
	);
	const [skinMode, setSkinMode] = useState(getStorageValue('skinMode', storageValue))
	useEffect(() => {
		document.querySelector('html').setAttribute('data-theme', getStorageValue('skin', (skinMode === 'auto' ? (isDarkMode ? 'dark' : 'light') : skinMode)));
		setStorageValue(skinMode === "auto" ? (isDarkMode ? "dark" : "light") : storageValue);
		ConfigContext.setAppConfig(skinMode === "auto" ? (isDarkMode ? "dark" : "light") : skinMode);
		ConfigContext.setSkinModeConfig(skinMode);
		localStorage.setItem('skinMode', skinMode);
	}, [storageValue, skinMode]);
	const changeColorMode = (eventKey) => {
		setSkinMode(eventKey);
		setStorageValue(eventKey === "auto" ? (isDarkMode ? "dark" : "light") : eventKey);
	};
	return (
		<Dropdown className={"ms-2 " + className} onSelect={changeColorMode}>
			<Dropdown.Toggle
				as="a"
				bsPrefix=' '
				className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
				id="dropdownUser">
				{skinMode === 'light' ? <SunFill /> : (skinMode === 'dark' ? <MoonStarsFill /> : <CircleHalf />)}
				<span className="visually-hidden bs-theme-text">Toggle theme</span>
			</Dropdown.Toggle>
			<Dropdown.Menu
				className="dashboard-dropdown dropdown-menu-end mt-1 py-0"
				align="end"
				aria-labelledby="dropdownUser"
				show={isDesktop ? true : false}
			>
				<Dropdown.Item eventKey="light" className="mt-3">
					<SunFill />
					<span className="ms-2">Light</span>
				</Dropdown.Item>
				<Dropdown.Item eventKey="dark">
					<MoonStarsFill />
					<span className="ms-2">Dark</span>
				</Dropdown.Item>
				<Dropdown.Item eventKey="auto" className="mb-3">
					<CircleHalf />
					<span className="ms-2">Auto</span>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DarkLightMode;
