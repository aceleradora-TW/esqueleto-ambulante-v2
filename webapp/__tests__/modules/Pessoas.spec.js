
import { mount } from '@vue/test-utils'
import Home from "../../src/modules/Pessoas/Pessoas";

describe("Home.test.js", () => {
    let component;

  beforeEach(() => {
    component = mount(Home);
  });

  it('equals messages to 10', () => {
    expect(component.vm.message).toEqual('Hello World');
    component.setData({ message: 10 })
    expect(component.vm.message).toEqual(10);
  });
});