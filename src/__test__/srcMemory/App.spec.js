
// import {expect} from "chai";
import React from "react";
import {shallow} from "enzyme";

// import GuessCount from "../../srcMemory/GuessCount";
import Memory from "../../srcMemory/App";

// const numb = 36;

describe("<Memory />", () => {
  it("renders without crashing", () => {
    shallow(<Memory/>);
    // const wrapper = shallow(<Memory/>);

    // expect(wrapper).to.contain(<GuessCount guesses={0}/>);
  });
  /*
  it("has 36 cards", () => {
    const wrapper = shallow(<Memory/>);

    expect(wrapper.find("Card")).to.have.length(numb);
  });

  it("should match its reference snapshot", () => {
    const wrapper = shallow(<Memory/>);

    expect(wrapper).to.matchSnapshot();
    /*
    const mock = sinon
    .stub(App.prototype, 'generateCards')
    .returns([...SYMBOLS.repeat(2)])
    try{
      const wrapper = shallow(<App />)

      expect(wrapper).to.matchSnapshot()
    }finally{
     mock.restore()
    }
  });*/
});