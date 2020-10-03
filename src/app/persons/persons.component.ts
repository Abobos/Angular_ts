import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {}

  ngOnInit(): void {
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );

    this.isFetching = true;

    this.prsService.fetchPersons();
  }

  onRemovePerson(name: string): void {
    this.prsService.removePerson(name);
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }
}
