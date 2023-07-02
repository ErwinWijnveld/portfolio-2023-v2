import CustomCursor from './CustomCursor';
import Footer from './Footer';
import HeaderNew from './HeaderNew';
import Meta from './Meta';

const Layout = ({ children, meta, ...rest }: any) => {
	return (
		<div {...rest}>
			{/* <Meta {...meta} /> */}
			<HeaderNew />
			<CustomCursor />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
