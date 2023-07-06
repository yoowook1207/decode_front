import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {textInputDto} from "./interfaces/textInputDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoryTellerService {
  serverURL = environment.backendURL
  constructor(private readonly http: HttpClient) {

  }

  postGptResponse(chatInput:any): Observable<textInputDto> {
    return this.http.post<textInputDto>(`${this.serverURL}/story-teller/plot`, chatInput)
  }
}
