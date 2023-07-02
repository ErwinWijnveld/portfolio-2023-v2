import CustomCursor from './CustomCursor';
import HeaderNew from './HeaderNew';
import Meta from './Meta';

const Layout = ({ children, meta, ...rest }: any) => {
	return (
		<div {...rest}>
			{/* <Meta {...meta} /> */}
			<HeaderNew />
			<CustomCursor />
			<main>{children}</main>
		</div>
	);
};
export default Layout;
