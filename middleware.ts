import authConfig from './auth.config';
import NextAuth from 'next-auth';
import { apiAuthPrefix, authRoutes,DEFAULT_LOGIN_REDIRECT,publicRoutes } from './routes';

const {auth : middleware} = NextAuth(authConfig)
export default middleware((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) return null;
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return null;
    }
    if (!isLoggedIn && !isPublicRoute) {
            return Response.redirect(new URL("/auth/login",nextUrl))
    }
})
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};