const AUTH_PAGES=["/auth/login","/auth/register"];

export const isAuthPages=(url)=>{
    return AUTH_PAGES.some((page)=>page.startsWith(url));
}