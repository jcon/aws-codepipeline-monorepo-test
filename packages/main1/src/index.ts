import { myFoo } from '@meetup/foo';
import { myBar } from '@meetup/bar';

// This program prints things to the console.
// This update should trigger a build (again again).
const main = () => {
    console.log(`MAIN 1\nfoo: ${myFoo()}\nbar: ${myBar()}`);
}

main();