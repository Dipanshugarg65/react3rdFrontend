// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'success',
        message: 'Data Successfully Loaded'
    },
    responseFailure:{
        title: 'Error',
        message: 'An erro occured while fetching from the server. Please try again'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server. Please check internet connectivity and try again later'
    }
}   

// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url: '/', method: 'POST/GET/PUT/DELETE' param: true/false, query: true/false }
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST'}
}