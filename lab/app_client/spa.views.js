class View {

    get home() {
        return Promise.resolve(`<h1>Home page</h1>`)
    }

    get test(){
        return Promise.resolve(`<h1>This is a test page</h1>
            <p data-bind-class="{'on' : 'isOn', 'off' : '!isOn'}">Test</p>
            <button data-bind-event="click:toggleOn">Click Me</button>
            
            
            <input type="text" name="test" />
            <p data-bind-model="test" class="on"></p>
        `

        )
    }
    
}