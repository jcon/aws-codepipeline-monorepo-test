import { myFoo } from '@meetup/foo';
import { myBar } from '@meetup/bar';

const main = () => {
    console.log(`MAIN 1\n\nfoo: ${myFoo()}\nbar: ${myBar()}`);
}

main();