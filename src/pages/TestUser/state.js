import { observable } from 'mobx'

class State {
    @observable name = 'Name'
    @observable age = 0
}

export default State