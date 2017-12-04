class Model extends BaseModel {

    constructor() {
        super()        
    }

    toggleOn(evt){
        this.dataBindModel.isOn = !this.dataBindModel.isOn;
        console.log(this.dataBindModel.isOn);
        console.log("called");
        return Promise.resolve()
    }

    get isOn(){
        return this.dataBindModel.isOn;
    }
}