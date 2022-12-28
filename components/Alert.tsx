import React, { ReactNode } from 'react';

interface IAlert {
	type: 'alert-success' | 'alert-warning' | 'alert-error' | 'alert-info';
	children: ReactNode;
}

const Alert = (prop: IAlert) => {
	return (
		<div className={`alert ${prop.type} shadow-lg`}>
			<div>
				<span>{prop.children}</span>
			</div>
		</div>
	);
};

export default Alert;
