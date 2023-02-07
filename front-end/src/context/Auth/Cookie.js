
/**
 * @param {}
 */

const setCookie = (name, value, days, path = '/') => {

    let expires = '';
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()};`;
    }
    document.cookie = `${name}=${value}${expires}; path=${path}`;

};


/**
 * @param {}
 */
const getCookie = (cookieName) => {

    if (document.cookie.length > 0) {
        let cookieStart = document.cookie.indexOf(cookieName + '=');
        if (cookieStart !== -1) {
            cookieStart = cookieStart + cookieName.length + 1;
            let cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            return document.cookie.substring(cookieStart, cookieEnd);
        }
    }
    return "";

};


const deleteCookie = () => {
    document.cookie = "ct_user=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

export {
    setCookie,
    getCookie,
}