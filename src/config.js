require('babel-polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  app: {
    title: 'Alex Buchanan',
    head: {
      titleTemplate: 'Alex Buchanan: %s',
    },
    home: {
      title: 'Front-end Developer',
      link: [
        { rel: 'canonical', href: 'http://alexdbuchanan.com' },
      ],
      meta: [
        { name: 'description', content: "A front-end developer's personal website." },
      ],
    },
    contact: {
      title: 'Contact',
      meta: [
        { name: 'description', content: 'Feel free to reach out to me. My preferred method of contact is email, alexbuchanan6@gamil.com, and I will get back to you as soon as possible' },
      ],
      link: [
        { rel: 'canonical', href: 'http://alexdbuchanan.com/contact' },
      ],
    },
    resume: {
      title: 'Resume',
      meta: [
        { name: 'description', content: 'I predominately work on front-end development, but I am always looking to expand toolkit, especially server-side.' },
      ],
      link: [
        { rel: 'canonical', href: 'http://alexdbuchanan.com/resume' },
      ],
    },
    about: {
      title: 'About',
      meta: [
        { name: 'description', content: 'I am currently living in Cambridge, MA. I really enjoy working with React and Redux. I also like drinking beer outside on a nice sunny day while either playing some golf or snowboarding.' },
      ],
      link: [
        { rel: 'canonical', href: 'http://alexdbuchanan.com/about' },
      ],
    },
  },

}, environment);
