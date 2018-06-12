import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { FormItemStructure, FormItemType} from 'gg-ui'
import { DataStore } from 'gg-basic-data-services'

@Component(
    {
        templateUrl: './message-enter.component.html'
    }
)
export class OtherComponent {
    public errFn = function (err) { console.log('Error: ' + err); }

    constructor( private dataStore: DataStore ) {

    }

    @Input() userObservable: Observable<any>;

    public formStructure: FormItemStructure[]= []
    public helpMessages: any
    public employee = this.userObservable
    
    public program = [
        { id: 1, name:'Eurisko'},
        { id: 2, name:'Krino 2018'},
        { id:3, name: 'Screens 2018'},
        { id:4, name: 'Xenia'}
    ]
/*
    users: any
    @Input() path: string = 'users'

    getUserObservable(id: string): Observable<any> {
        return this.usersObservable.map(users => users.filter(s => {
            return s.data._id === id
        })
    )}
*/
    ngOnInit(): void {
   
        this.helpMessages = this.dataStore.getDataObservable('help2018').map(help2018 => help2018.map(hel => hel.name));

        /*
        this.otpNameObservable= this.dataStore.getDataObservable('otps').map(otps => otps.map(o => o.name))
        this.helpMessages =  this.dataStore('help2018').map(messages => this.helpMessages = messages)
*/
        this.formStructure.push(new FormItemStructure('program', 'HELP.LABEL.PROGRAM', FormItemType.FlexiList, {selectableData: this.program, isRequired: true}))
        this.formStructure.push(new FormItemStructure('description', 'HELP.LABEL.DESCRIPTION', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('name', 'HELP.LABEL.EMPLOYEE', FormItemType.InputText, { isRequired: true }))
    }

    formSaved(data) {
        this.dataStore.addData('help2018', {
            program: data.program,
            description: data.description,
            name: data.name
        }).first().subscribe(res => {
            data.setSuccess('OK')
        });
    }
} 