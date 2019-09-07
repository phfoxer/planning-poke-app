import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SendCardProvider {
  url: string = 'http://planningpoker.inovaapp.com/api/';
  constructor(public http: HttpClient) {
  }

  send(data: any): Promise<any> {
    console.log(data);
    return new Promise((resolve, reject) => {
      try {
        this.http.post(this.url + 'match', data).subscribe(r => {
          if (r = !null) {
            resolve(r);
          } else {
            reject(null);
          }
        });
      } catch (error) {
        reject(error);
      }

    });
  }
}
