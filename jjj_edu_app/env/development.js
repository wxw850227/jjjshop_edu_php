let url = 'http://www.jjj-edu-small.com';
if(process.env.NODE_ENV != 'development'){
	url = '/api';
}
export default {
	url
}
