import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { FormItemStructure, FormItemType} from 'gg-ui'
//import { userInfo } from 'os';

@Component(
    {
        templateUrl: './other.component.html'
    }
)
export class OtherComponent {
    public errFn = function (err) { console.log('Error: ' + err); }

    constructor() {
        
    }

    @Input() userObservable: Observable<any>;

    public formStructure: FormItemStructure[]= []
    public employee = this.userObservable
    
    public people = [
        { id: 1, name:'one', last: 'one11'},
        { id: 2, name:'two', last: 'one22'},
        { id:3, name: 'thr', last: 'one33'},
        { id:4, name: 'four', last: 'one44'}
    ]
    
    ngOnInit(): void {
    
        this.formStructure.push(new FormItemStructure('description', 'HELP.LABEL.DESCRIPTION', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('program', 'HELP.LABEL.PROGRAM', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('name', 'HELP.LABEL.EMPLOYEE', FormItemType.FundingTypes, { isRequired: true }))
        this.formStructure.push(new FormItemStructure('name', 'HELP.LABEL.EMPLOYEE', FormItemType.FlexiList, { selectableData: this.people , isRequired: true }))
        //this.formStructure.push(new FormItemStructure('name', 'HELP.LABEL.EMPLOYEE', FormItemType.FlexiList, { selectableData: this.employee , isRequired: true }))

    }
}