import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BasePromptFormModalComponent, Group } from '@rucken/core';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroupsService } from '../../../../services/groups.service';
import { UsersListFiltersModal } from './users-list-filters-modal';
import { UsersListFiltersModalService } from './users-list-filters-modal.service';


@Component({
  selector: 'users-list-filters-modal',
  templateUrl: './users-list-filters-modal.component.html',
  styles: [':host form {height: 100%;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListFiltersModalComponent extends
  BasePromptFormModalComponent<UsersListFiltersModal> implements OnInit {
  @Input()
  class: string;
  groups$: Observable<Group[]>;
  sortTypes = UsersListFiltersModal.sortTypes;
  sortFields = UsersListFiltersModal.sortFields;

  constructor(
    private _groupsService: GroupsService,
    private _usersListFiltersModalService: UsersListFiltersModalService
  ) {
    super();
    this.group(UsersListFiltersModal);
    this.groups$ = this._groupsService.items$.pipe(
      map(
        items => {
          items.unshift(
            plainToClass(
              Group,
              {
                id: '',
                title: 'None'
              }
            )
          );
          return items;
        }
      )
    );
  }
  ngOnInit() {
    this.data = this._usersListFiltersModalService.getCurrent();
  }
  onYesClick(data?: any) {
    this._usersListFiltersModalService.setCurrent(
      this.data
    );
    super.onYesClick(data);
  }
}