import { Component, OnInit } from '@angular/core'

@Component({
    //selector: '[app-servers]',
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = "Server not created yet!"
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['TestServer', 'TestServer 2'];
    constructor() { 
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    ngOnInit() {}
    onCreateServer() {
        this.serverCreationStatus = "Server is created!"
        this.servers.push(this.serverName);
        this.serverCreated = true;
    }
    onUpdateServerName(event: any) {
        //Type casting as event type is any here
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}