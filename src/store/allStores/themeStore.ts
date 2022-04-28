import {makeAutoObservable} from "mobx";

export class ThemeStore {

    openMenu: boolean = true
    accentColor: string = '#81de8c'
    bgColor: string = '#202B33'
    textColor: string = '#738491'

    constructor() {
        makeAutoObservable(this)
    }

    setOpenMenu (open: boolean) {
        this.openMenu = open
    }
}