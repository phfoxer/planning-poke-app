import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterMatchProvider {

  constructor(public http: HttpClient) { }

}
