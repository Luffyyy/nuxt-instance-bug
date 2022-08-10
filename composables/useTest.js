export default async function() {
    console.log('Getting nuxt app, this should work.');
    useNuxtApp();

    console.log('Trying to fetch, this should also work.');

    await $fetch(`https://catfact.ninja/fact`);

    console.log('Getting nuxt app again, this will not work and error:');

    useNuxtApp();

    console.log("This will not run!");
}