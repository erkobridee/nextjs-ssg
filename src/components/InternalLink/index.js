// https://reactjs.org/docs/forwarding-refs.html

import React from 'react';
import cs from 'classnames';

import Link from 'next/link';

import styles from './index.module.scss';

export const InternalLink = React.forwardRef(
	({ className, href, children }, ref) => {
		return (
			<Link href={href}>
				<a className={cs(styles.link, className)} ref={ref}>
					{children}
				</a>
			</Link>
		);
	}
);

export default InternalLink;
