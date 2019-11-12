// import { mount } from '@vue/test-utils'
// import Component from '@/src/components/jest-vueComponent.vue';
import { shallow } from 'vue-test-utils'
import VueComponent from '@/components/jest-VueComponent.vue';
// describe('Component', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Component)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })
// })


// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('VueComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof VueComponent.data).toBe('function')
  })
});

//測試一個Component的Data預設值，使用vm.message就可以得到該Component的Data值
describe('MyComponent', () => {
  let wrapper = shallow(VueComponent)
  let vm = wrapper.vm

  beforeEach(()=>{
    wrapper = shallow(VueComponent)
    vm = wrapper.vm
  })

  // Inspect the raw component options
  it('Test default data of VueComponent ', () => {
    expect(vm.message).toEqual('hello!')
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
