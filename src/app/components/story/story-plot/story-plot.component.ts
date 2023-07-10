import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StoryTellerService} from "../../../services/story-teller.service";
// import {inputTextDto} from "../../../services/interfaces/textDto";
export enum Role {
  ASSISTANT = 'assistant',
  USER = 'user'
}
@Component({
  selector: 'app-story-plot',
  templateUrl: './story-plot.component.html',
  styleUrls: ['./story-plot.component.scss']
})
export class StoryPlotComponent implements OnInit {

  @ViewChild('chatBox', {static:false}) chatBox: ElementRef;

  userInput!: FormGroup;
  userMessage: string[] = [];
  assistantMessage: string[] =[];

  get textInput(): FormControl {
    return this.userInput.get('textInput') as FormControl
  }

  constructor(
    private fb: FormBuilder,
    private storyTellerService: StoryTellerService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.userInput = this.fb.group({
      textInput: ''
    })
  }

  sendMessage() {
    // const chatInput: string = this.textInput.value
    const chatInput: string = this.userInput.get('textInput')?.value
    this.userMessage.push(chatInput)

    // const postBody: inputTextDto = {
    //   userMessages: this.userMessage,
    //   assistantMessages: this.assistantMessage
    // }

    this.addMessageElement(this.chatBox.nativeElement, chatInput, Role.USER)

    this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight
    // this.storyTellerService.postGptResponse(postBody).subscribe(
    //   (res) => {
    //     console.log(res)
    //     this.addMessageElement(this.chatBox.nativeElement, res.assistant, Role.ASSISTANT)
    //
    //     this.assistantMessage.push(res.assistant)
    //
    //     this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight
    //   }
    // )
    this.textInput.setValue('')
  }

  addMessageElement (parentNode:ElementRef, inputText:string, role:Role) {
    const returnTextDom = this.renderer.createText(inputText)
    const message = this.renderer.createElement('p')
    this.renderer.appendChild(message, returnTextDom)
    this.renderer.addClass(message, `${role}-message`)
    // user-message

    const messageContainer = this.renderer.createElement('div')
    this.renderer.addClass(messageContainer, `${role}-message-container`)

    if (role == Role.ASSISTANT) {
      const aiName = this.renderer.createText('Jason')
      const nameP = this.renderer.createElement('p')
      this.renderer.appendChild(nameP, aiName)
      this.renderer.addClass(nameP, 'ai-name')
      this.renderer.appendChild(messageContainer, nameP)
    }

    this.renderer.appendChild(messageContainer, message)
    this.renderer.appendChild(parentNode, messageContainer)
  }
}
