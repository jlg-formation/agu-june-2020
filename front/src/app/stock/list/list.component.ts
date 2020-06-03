import { Component, OnInit } from '@angular/core';
import { faRedo, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faRedo = faRedo;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  constructor() {}

  ngOnInit(): void {}
}
