import * as CandyResolvers from './candy';

export const CandyNameTest = () => {
    const obj = {
        cid: null,
        name: "White Chocolate",
        tags: ["Chocolate","Sweet"],
        links: ["http://amazon.com/whitechocolate"]
    };
  
    const args = {cname: "White"};
    const ctx = {};

    const output = CandyResolvers.findCandy(obj, args, ctx);
    console.log(output);
    expect(output).toEqual(obj);
};