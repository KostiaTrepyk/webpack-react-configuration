/* Sass modules */
declare module "*.sass" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

/* Assets */
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
