const apiUrl = 
	window.location.hostname === 'localhost'
		? 'http://localhost:4000/send'
		: process.env.REACT_APP_EMAIL_URL

export default apiUrl