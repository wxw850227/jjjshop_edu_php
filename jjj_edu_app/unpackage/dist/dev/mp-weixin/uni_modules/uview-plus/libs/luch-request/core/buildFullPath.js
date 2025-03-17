"use strict";const i=require("../helpers/isAbsoluteURL.js"),s=require("../helpers/combineURLs.js");function e(l,u){return l&&!i.isAbsoluteURL(u)?s.combineURLs(l,u):u}exports.buildFullPath=e;
