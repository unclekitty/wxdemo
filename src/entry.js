import Vue from 'vue';

import weex from 'weex-vue-render';

import router from '@router';

import App from '@/app.vue';

import mixins from './mixins';

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

weex.init(Vue);


// register global mixins.
Vue.mixin(mixins);

// app
new Vue(Vue.util.extend({
  el: '#root',
  router
}, App));

router.push('/');