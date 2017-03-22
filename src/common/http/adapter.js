module.exports = {
    test: {
        getUser (data) {
            data.apaptered = true
            return data
        }
    },
    auth: {
        login (data) {
            return data
        }
    }

}