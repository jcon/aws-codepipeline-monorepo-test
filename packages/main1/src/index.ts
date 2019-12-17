import { myFoo } from '@meetup/foo';
import { myBar } from '@meetup/bar';

const main = () => {
    console.log(`MAIN 2\nfoo: ${myFoo()}\nbar: ${myBar()}`);
}

main();