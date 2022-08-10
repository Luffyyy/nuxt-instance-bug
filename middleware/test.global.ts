
export default defineNuxtRouteMiddleware(async () => {
    await useTest('users');
});