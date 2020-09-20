const axios = require('axios');

const [,,command] = process.argv;

async function run(command) {
    if(!command) {
        throw new Error('Command ping or pong required');
    }
    
    let payload = {
        event_type: "",
            client_payload: {
                command: ""
            }
    };
    
    const {
        REPO_OWNER: owner,
        REPO_NAME: repo,
    } = process.env;
    
    console.log(`Recieved ${command || "No"} command`);
    switch(command) {
        case "ping":
            if(!owner || !repo) {
                throw new Error('Owner and repo required');
            }
            payload.event_type = "run-ping";
            payload.client_payload.command = "pong";
            break;
        case "pong":
            if(!owner || !repo) {
                throw new Error('Owner and repo required');
            }
            payload.event_type = "run-done";
            payload.client_payload.command = "done";
            break;
        case "done":
            console.log('I GUESS WE ARE DONE!!! :-D');
            return;
        default:
            throw new Error('Command not supported');
    }
    
    const dispatchUrl = `https://api.github.com/repos/${owner}/${repo}/dispatches`;
    
    console.log(`Dispatching ${dispatchUrl} with paylaod`, payload);
    const res = await axios.post(dispatchUrl, payload)
    return res.status;

}
run(command)
.then(() => console.log('Completed running command'))
.catch(e => {
    console.log(e.message);
    process.exit(1);
})