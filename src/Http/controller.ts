/// <reference path='../../typings/main.d.ts' />

import * as http from "http";
import * as url from "url";

// Třída ApiController
export class ApiController<T, TID> {
    private _bodyRequest: string;
    private _bodyResponse: T;
    private _url: url.Url;


    constructor(private _request: http.IncomingMessage, private _response: http.ServerResponse) {
        this._response.setHeader("content-Type", "application/json");
        this._url = url.parse(this._request.url, true, true);
        this.Resolve()
    }

    public Resolve(): void {
        if (this._request.method == "PUT" || this._request.method == "POST") {
            // čtení body
            var body = [];
            this._request.on("data", (tmpData) => body.push(tmpData)).on("end", () => {
                this._bodyRequest = Buffer.concat(body).toString();

                if (this._request.method == "PUT")
                    this.Put();
                else
                    this.Post();
            }
            )

        }
        else {

            if (this._request.method == "GET")
                this.Get();
            else {
                this.Delete(this._url.query.id)
            }

        }
    }

    public get Response(): http.ServerResponse {
        return this._response;
    }

    public NotImplemented(pInfo: string = "") {
        this.Response.writeHead(404);
        this.Response.end("Not implemented : " + pInfo);
    }
    // Create
    public Post() {
        this.NotImplemented("Post");
    }

    // Read
    public Get(id: TID = null) {
        this.NotImplemented("Get");
    }

    // Update
    public Put() {
        this.NotImplemented("Put");
    }

    // Delete
    public Delete(id: TID) {
        this.NotImplemented("Delete");
    }
}

