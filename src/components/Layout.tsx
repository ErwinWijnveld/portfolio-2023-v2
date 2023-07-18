import { ReactLenis } from '@studio-freight/react-lenis';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import HeaderNew from './HeaderNew';
import Meta from './Meta';

const Layout = ({ children, meta, ...rest }: any) => {
	return (
		<ReactLenis root {...rest}>
			<Meta {...meta} />
			<HeaderNew />
			<CustomCursor />
			<main>{children}</main>
			<Footer />
		</ReactLenis>
	);
};
export default Layout;
