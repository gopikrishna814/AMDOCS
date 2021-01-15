// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //Login APIs
  onSignIn: window["env"]["apiUrl"]+"/api/securityService/signin_v2",
  authorizeUser:  window["env"]["apiUrl"]+"/api/securityService/authorization",
  getPageFeatureAccess: window["env"]["apiUrl"]+"/api/securityService/access",
  getUserDetails: window["env"]["apiUrl"]+"/api/securityService/userDetails_v2",
  onLogout: window["env"]["apiUrl"]+"/api/securityService/logout_v2",
  tenantCall:  window["env"]["apiUrl"]+"/api/configService/tenant",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
