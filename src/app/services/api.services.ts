import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { $ } from 'protractor';
// import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    // private baseUrl: string = environment.apiUrls.baseUrl;


    constructor(private http: HttpClient) { }


    /**
     * Get dashboards
     */
    // getDashboards() {
    //     return this.http
    //         .get(this.dashboardBaseUrl + 'getAllDashboard', )
    //         .map((res: Response) => res)
    // }

}