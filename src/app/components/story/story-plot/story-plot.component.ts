import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StoryTellerService} from "../../../services/story-teller.service";

@Component({
  selector: 'app-story-plot',
  templateUrl: './story-plot.component.html',
  styleUrls: ['./story-plot.component.scss']
})
export class StoryPlotComponent implements OnInit {

  userInput!: FormGroup;
  userMessage: string[] = [];
  assistantMessage: string[] =[];

  get textInput(): FormControl {
    return this.userInput.get('textInput') as FormControl
  }

  constructor(
    private fb: FormBuilder,
    private storyTellerService: StoryTellerService
  ) {}

  ngOnInit() {
    this.userInput = this.fb.group({
      textInput: ''
    })
  }

  onSubmit() {
    console.log(this.textInput.value)
    this.textInput.setValue('')
  }

  sendMessage() {
    const chatInput:string = this.textInput.value
    this.userMessage.push(chatInput)

    const myDateTime = '1993-12-07'
    const postBody = {
      myDateTime: myDateTime,
      userMessages: this.userMessage,
      assistantMessages: this.assistantMessage
    }

    this.storyTellerService.postGptResponse(postBody).subscribe(
      console.log
    )
    this.textInput.setValue('')

  }
}
