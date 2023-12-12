import styles from './Headling.module.css';
import cn from 'classnames';
import { HeadlingProps } from './Heading.props';

function Heading({ children, className,  ...props}: HeadlingProps) {
	return (
		<h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
	);
}

export default Heading;