import * as morse from '../src/ts/morse'
import * as user from '../src/ts/user'
import { pipeline } from 'stream'

const ui = new user.UI(process.stdin, process.stdout);

pipeline(
    ui,
    async function*(data){
        for await (let i of data) {
            yield morse.to(i);
        }
    },
    ui,
    (err => {(err)? console.error(err): console.log('complete');})
);