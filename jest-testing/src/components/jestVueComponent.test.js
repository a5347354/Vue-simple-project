// import { mount } from '@vue/test-utils'
// import Component from '@/src/components/jest-vueComponent.vue';
import HelloWorld from '@/components/jestVueComponent.vue';

// describe('Component', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Component)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })
// })


// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })
});

// import Vue from "vue";
// // import App from "../src/App";
// import Component from './jest-vueComponent';

// describe("App.test.js", () => {
//   let cmp, vm;

//   beforeEach(() => {
//     cmp = Vue.extend(Component); // Create a copy of the original component
//     vm = new cmp({
//       data: {
//         // Replace data value with this fake data
//         messages: ["Cat"]
//       }
//     }).$mount(); // Instances and mounts the component
//   });

//   it('equals messages to ["Cat"]', () => {
//     expect(vm.messages).toEqual(["Cat"]);
//   });
// });
