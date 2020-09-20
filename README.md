# example-event-dispatcher-workflows

> Implements ability to trigger workflows from separate workflow files
> Implements ability to trigger same workflow in different running modes 

## Trigger github actions from external tools walkthrough

[![Trigger github actions from external tools walkthrough](https://img.youtube.com/vi/84kUf9ycr9A/0.jpg)](https://youtu.be/84kUf9ycr9A)

> Click To Watch ☝️ - Trigger github actions from external tools

## Multiple workflows 
There are 3 workflows 
- Ping - Running this workflow will trigger the Pong workflow through the use of repository dispatch
     - Workflow listens to `run-ping` event type
- Pong - Running this workflow will trigger the Done workflow through the use of repository dispatch 
     - Workflow listens to `run-pong` event type
- Done - Running this workflow will output that we are done
     - Workflow listens to `run-done` event type


## Single workflow 
There are three running modes that are used to trigger the workflow. The workflow itself listens to 3 events `run-ping-allinone`, `run-pong-allinone`, and `run-done-allinone`, and it runs in different running modes depeneding on the command provided. You could also determine the running mode from the even type, but for our purposes, we utilized a command passed in the body of the dispatch event. Also, we could listen to only one event since we are passing command as a running mode but we wanted to provide an example of how event types can take in different events within the array.

Running modes
- Ping running mode - Triggers the all in one workflow and provides running mode Pong
- Pong running mode - Triggers the all in one workflow and provides running mode Done
- Done running mode - Outputs that we are done


