// import Vue from 'vue';
// import en from '../assets/i18n/en.json';
// import vi from '../assets/i18n/vi.json';
// import Storage from 'vue-ls';
// const options = {
//     namespace: 'vuejs__', // key prefix
//     name: 'ls', // name variable Vue.[ls] or this.[$ls],
//     storage: 'local', // storage name session, local, memory
// };
// Vue.use(Storage, options);
// Vue.filter('translate', (key, page) => {
//     const language = Vue.ls.get('language')
//     let lang = en;
//     if (language == 'vi') {
//         lang = vi;
//     }
//     if (page && lang[page][key]) {
//         return lang[page][key];
//     } else if (lang[key]) {
//         return lang[key];
//     } else {
//         return key;
//     }
// })
