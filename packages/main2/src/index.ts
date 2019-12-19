import { myFoo } from '@meetup/foo';
import { myBar } from '@meetup/bar';

// Added a comment; This shouldn't trigger a build.
const main = () => {
    console.log(`MAIN 2\n\nfoo: ${myFoo()}\nbar: ${myBar()}`);
}

main();