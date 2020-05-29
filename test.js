import { Selector } from 'testcafe';

fixture`RRF Journey`.page`https://codepen.io/jl00161/pen/rNOXLmZ`;

test('this fails', async t => {
    await t.switchToIframe(Selector('iframe'));
    await t.click(Selector('div').withText('Click here'));  
});