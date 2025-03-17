"use strict";let t;function i(e,o=500,f=!0){f?t||(t=!0,typeof e=="function"&&e(),setTimeout(()=>{t=!1},o)):t||(t=!0,setTimeout(()=>{t=!1,typeof e=="function"&&e()},o))}exports.throttle=i;
