const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const setup = () => {
  const dom = new JSDOM(
    '<!DOCTYPE html><html><body></body></html>'
  );
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js'
  };


  /**
   * Any props that are not already defined, grab those props, and define them
   */
  const props = Object.getOwnPropertyNames(window)
    .filter(prop => typeof global[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(window, prop));

  Object.defineProperties(global, props);

  Enzyme.configure({
    adapter: new Adapter()
  });

};

module.exports = setup;