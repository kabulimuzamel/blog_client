let apiUrl;
const apiUrls = {
	production: 'https://blog-server-w44u.onrender.com',
	development: 'http://localhost:8080',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl;
