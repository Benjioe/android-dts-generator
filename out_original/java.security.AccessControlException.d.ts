/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />

declare module java {
	export module security {
		export class AccessControlException {
			public constructor();
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.Permission);
			public getPermission(): java.security.Permission;
		}
	}
}