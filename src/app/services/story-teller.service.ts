import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {inputTextDto, returnTextDto} from "./interfaces/textDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoryTellerService {
  serverURL = environment.backendURL
  constructor(private readonly http: HttpClient) { }

  postGptResponse(chatInput:inputTextDto): Observable<returnTextDto> {
    return this.http.post<returnTextDto>(`${this.serverURL}/story-teller/plot`, chatInput)
  }
}
