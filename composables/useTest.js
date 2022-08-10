export default async function(url) {
    console.log('Getting nuxt app, this should work.');
    useNuxtApp();

    console.log('Trying to fetch, this should also work.');

    await $fetch(`http://localhost:8000/${url}`);

    console.log('Getting nuxt app again, this will not work and error:');

    useNuxtApp();

    console.log("This will not run!");
}