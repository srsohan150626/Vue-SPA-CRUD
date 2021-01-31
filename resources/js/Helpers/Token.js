class Token{
    isValid(token){
        const payload = this.payload(token);
        var base_url = window.location.origin;

        if(payload) {
            return payload.iss == (base_url)+"/api/auth/login" || (base_url)+"/api/auth/register" ? true : false
        }
        return false
    }

    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()