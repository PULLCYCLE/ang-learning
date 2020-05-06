import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() { }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }

  ngOnDestroy(): void {
  }

}
