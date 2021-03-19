export default ({ $axios, error, app }) => {
    $axios.onRequest(config => {
        config.headers.common['Access-Control-Allow-Origin'] = '*';
        config.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
        config.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
    })

    $axios.onResponse(response => {
        return Promise.resolve(response.data)
    })

    $axios.onError(err => {
        try {
            if (err.response?.status === 505) { // token expired
                app.$auth.logout();
                localStorage.clear();
                location.reload();
            }
        } catch (e) {
        }
        return Promise.reject(err)
    })
}
