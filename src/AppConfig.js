/* eslint-disable */

// import media files
import Logo from 'assets/images/brand/logo/logo.svg';
import MentorLogo from 'assets/images/mentor/geeks-mentor.svg';
import InverseLogo from 'assets/images/brand/logo/logo-inverse.svg';
import InverseLogoIcon from 'assets/images/brand/logo/logo-icon.svg';

export const settings = {
	app: {
		name: 'Geeks React UI',
		version: '3.0.0'
	},
	theme: {
		skin: 'auto', // possible values are light, dark or auto
		logo: Logo, // used for all front pages
		mentorLogo: MentorLogo,  // used for mentor pages
		inverseLogo: InverseLogo, // used for admin panel (vertical/default layout)
		inverseLogoIcon: InverseLogoIcon, // used for admin panel (compact layout)
	}
};
export default { settings };
