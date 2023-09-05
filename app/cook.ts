import Cookies from 'cookies'

Homepage.getServerSideProps = ({ req, res }) => {
	// Create a cookies instance
	const cookies = new Cookies(req, res)

	// Get a cookie
	cookies.get('myCookieName')

	// Set a cookie
	cookies.set('myCookieName', 'some-value', {
		httpOnly: true, // true by default
	})

	// Delete a cookie
	cookies.set('myCookieName')
}

e